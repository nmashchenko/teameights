import { FileService, FileType } from '@Files/file.service';
import { UsersService } from '@Users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamAvatarDto } from './dto/update-team-avatar.dto';
import { Team, TeamsDocument } from './teams.schema';
import { NotificationsService } from '@Notifications/notifications.service';
import { InviteToTeamDto } from './dto/invite-to-team.dto';
import { TeamType } from './types/teams.type';
import { TeamMembershipDTO } from './dto/membership.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { teamUpdateValidate } from '@/validation/team-update.validation';
import { InviteToTeamResponseDto } from './dto/invite-to-team.response.dto';
import { MailsService } from '@/mails/mails.service';
import { TeamSearchDto } from './dto/team-search.dto';
import { TransferLeaderDto } from './dto/transfer-leader.dto';

@Injectable()
export class TeamsService {
	constructor(
		@InjectModel(Team.name) private teamModel: Model<TeamsDocument>,
		private readonly userService: UsersService,
		private readonly filesService: FileService,
		private readonly notificationsService: NotificationsService,
		private readonly mailService: MailsService,
	) {}

	/**
	 * It creates a team and adds the leader to it
	 * @param {CreateTeamDto} dto - CreateTeamDto - this is the data transfer object that we will create in
	 * the next step.
	 * @returns Team
	 */
	async createTeam(dto: CreateTeamDto): Promise<Team> {
		const candidate = await this.userService.getUserById(dto.leader);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!candidate) {
			throw new HttpException(
				`User with this id: ${dto.leader} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the user already has a team. If it does, it is throwing an error. */
		if (candidate.team) {
			throw new HttpException(
				`User with this id: ${dto.leader} already has a team!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* It's checking if the type is one of the types in the TeamType enum. */
		if (!Object.values(TeamType).includes(dto.type as TeamType)) {
			throw new HttpException(
				`Type should be of type ${Object.values(TeamType)}`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the tag is unique. */
		if (await this.checkTagUniqueness(dto.tag)) {
			throw new HttpException(
				`Team with tag ${dto.tag} already exist`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Creating an array of members_id. */
		let members_id: Array<mongoose.Types.ObjectId> = [dto.leader];

		/* Creating a team with the given data. */
		const team = await this.teamModel.create({
			name: dto.name,
			description: dto.description,
			leader: dto.leader,
			members: members_id,
			country: dto.country,
			tag: dto.tag,
			type: dto.type,
			wins: 0,
			points: 0,
		});

		/* Adding the team to the user. */
		await this.userService.addTeam(candidate._id, team._id);

		/* Check if there are any members to invite. */
		if (dto?.members?.emails.length > 0) {
			/* Inviting all the members of the team to the team. */
			for (let i = 0; i < dto.members.emails.length; i++) {
				let candidate = {
					email: dto.members.emails[i],
					from_user_id: dto.leader,
					teamid: team._id,
				};
				await this.inviteToTeam(candidate);
			}
		}

		return team;
	}

	/**
	 * It checks if a team with the given tag already exists
	 * @param {string} tag - string - the tag of the team
	 * @returns A team object or null
	 */
	private async checkTagUniqueness(tag: string): Promise<Team> | null {
		return await this.teamModel.findOne({ tag });
	}

	/**
	 * Get a team by its id
	 *
	 * The first line of the function is a comment. It's a comment that describes the function
	 * @param id - mongoose.Types.ObjectId
	 * @returns A team object
	 */
	async getTeamById(id: mongoose.Types.ObjectId): Promise<Team> {
		return await this.teamModel
			.findById(id)
			.populate('members')
			.populate('leader');
	}

	/**
	 * It updates the team avatar
	 * @param {UpdateTeamAvatarDto} dto - UpdateTeamAvatarDto - The dto that contains the team id and the
	 * image.
	 * @returns The file path of the image.
	 */
	async updateTeamAvatar(dto: UpdateTeamAvatarDto): Promise<Team> {
		const candidateTeam = await this.getTeamById(dto.teamID);

		if (!candidateTeam) {
			throw new HttpException(
				`Team with this id: ${dto.teamID} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the user has an image. If it does, it is removing the image. */
		if (candidateTeam.image) {
			await this.filesService.removeFile(candidateTeam.image);
		}

		/* Creating a file in the static folder. */
		const filePath = await this.filesService.createFile(
			FileType.TEAMS,
			dto.image,
		);

		/* Updating the user with the given email with the new data and returning the updated user. */
		const updatedTeam = await this.teamModel.findOneAndUpdate(
			{ _id: dto.teamID },
			{ image: filePath },
			{ new: true },
		);

		return updatedTeam;
	}

	/**
	 * > Get all teams from the database, populate the members and leader fields with the user data
	 * @returns An array of Team objects.
	 */
	async getAllTeams(): Promise<Team[]> {
		return await this.teamModel
			.find({})
			.populate('members')
			.populate('leader');
	}

	/**
	 * It checks if the user exists, if the team exists, if the user already has a team, and if the user
	 * already has an invitation to the team. If all of these conditions are met, it creates a notification
	 * and adds it to the user's notifications
	 * @param {InviteToTeamDto} dto - InviteToTeamDto - this is the object that is passed to the function.
	 * @returns The status of the invitation.
	 */
	async inviteToTeam(dto: InviteToTeamDto): Promise<InviteToTeamResponseDto> {
		const candidate = await this.userService.getUserByEmail(dto.email);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!candidate) {
			throw new HttpException(
				`User with this email: ${dto.email} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the user already has a team. If it does, it is throwing an error. */
		if (candidate.team) {
			throw new HttpException(
				`User with this email: ${dto.email} already has a team!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const team = await this.getTeamById(dto.teamid);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!team) {
			throw new HttpException(
				`This team doesn't exist: ${dto.teamid} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		if (team.type === 'closed') {
			throw new HttpException(
				`This team is currently closed. Leader should open it to send invites.`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// TODO: check if user who invites is actually in the team (security)

		/* Checking if the user already has an invitation to the team. */
		const notifications =
			await this.notificationsService.getTeamNotificationsForUser(
				candidate._id,
				team._id,
			);

		/* Checking if the user already has an invitation to the team. */
		if (notifications.length > 0) {
			throw new HttpException(
				`User already have invite in team ${team.name}`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const notificationID =
			await this.notificationsService.createTeamNotification({
				userid: candidate._id,
				teamid: team._id,
				message: `You were invited to the team ${team.name}!`,
				from_user_id: dto.from_user_id,
				to_user_email: candidate.email,
				status: 'pending',
			});

		await this.userService.addNotification(candidate._id, notificationID);

		// ! ERROR: getting error when trying to add this, on github acions:
		// ! connect ECONNREFUSED 127.0.0.1:587
		// ! Investigate later
		const from_user = await this.userService.getUserById(dto.from_user_id);
		await this.mailService.sendTeamInviteEmail(
			'http://localhost:3000',
			candidate,
			from_user,
			team,
		);

		return {
			status: `${candidate.email} invited to team ${team.name} with id ${team._id}!`,
			notificationID: notificationID,
		};
	}

	/**
	 * It removes a notification from the database and from the user
	 * @param userId - mongoose.Types.ObjectId,
	 * @param notificationid - mongoose.Types.ObjectId,
	 */
	private async removeNotification(
		userId: mongoose.Types.ObjectId,
		notificationid: mongoose.Types.ObjectId,
	) {
		console.debug(
			`Removing notification ${notificationid} from user ${userId}`,
		);
		/* Removing the notification from the database. */
		await this.notificationsService.removeNotification(notificationid);

		/* Removing the notification from the user. */
		await this.userService.removeNotification(userId, notificationid);
	}

	/**
	 * It's a function that accepts a notificationid as a parameter, and it's a function that returns a
	 * promise of an object
	 * TODO: Implement transaction support
	 * @param notificationid - mongoose.Types.ObjectId,
	 * @returns an object with a status.
	 */
	async acceptInvite(
		notificationid: mongoose.Types.ObjectId,
	): Promise<Object> {
		const notification =
			await this.notificationsService.getTeamNotificationById(
				notificationid,
			);

		if (!notification) {
			/* Checking if the user has the notification. If it does, it is removing it. */
			const candidate = await this.userService.checkNotifications(
				notificationid,
			);

			if (candidate) {
				await this.userService.removeNotification(
					candidate._id,
					notificationid,
				);
			}

			throw new HttpException(
				`This notification doesn't exist: ${notificationid} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const user = await this.userService.getUserByEmail(
			notification.to_user_email,
		);

		if (new Date() > notification.expiresAt) {
			await this.removeNotification(user._id, notificationid);

			throw new HttpException(
				`Invite expired on ${notification.expiresAt.toLocaleDateString(
					'en-US',
					{ year: 'numeric', month: '2-digit', day: '2-digit' },
				)}`, // 08/19/2020 (month and day with two digits)
				HttpStatus.BAD_REQUEST,
			);
		}

		if (user.team) {
			await this.removeNotification(user._id, notificationid);
			throw new HttpException(
				`You already joined the team!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const team = await this.teamModel.findById(notification.teamid);

		/* Checking if the team has 8 members. If it does, it is throwing an error. */
		if (Number(team.members.length) === 8) {
			await this.removeNotification(user._id, notificationid);
			throw new HttpException(
				`Team already have 8 members inside!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// TODO: check if after user joined length is equal to 8 => make team type 'closed'

		/* Adding the user to the team. */
		await this.teamModel.updateOne(
			{ _id: team._id },
			{ $push: { members: user._id } },
		);

		/* Adding the team to the user. */
		await this.userService.addTeam(user._id, team._id);

		/* Removing the notification from the user and from the database. */
		await this.removeNotification(user._id, notificationid);

		return {
			status: `User ${user.email} successfully joined ${team.name} and all notifications have been cleared.`,
		};
	}

	/**
	 * It removes a notification from the user's notification list and then removes the notification from
	 * the database
	 * @param notificationid - mongoose.Types.ObjectId
	 * @returns The status of the rejection.
	 */
	async rejectTeamInvite(
		notificationid: mongoose.Types.ObjectId,
	): Promise<Object> {
		const notification =
			await this.notificationsService.getTeamNotificationById(
				notificationid,
			);

		if (!notification) {
			/* Checking if the user has the notification. If it does, it is removing it. */
			const candidate = await this.userService.checkNotifications(
				notificationid,
			);

			if (candidate) {
				await this.userService.removeNotification(
					candidate._id,
					notificationid,
				);
			}

			throw new HttpException(
				`This notification doesn't exist: ${notificationid} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const user = await this.userService.getUserByEmail(
			notification.to_user_email,
		);

		await this.removeNotification(user._id, notificationid);

		return {
			status: `Rejected and all notifications have been cleared.`,
		};
	}

	async joinTeam(dto: TeamMembershipDTO): Promise<Team> {
		const candidate = await this.userService.getUserById(dto.user_id);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!candidate) {
			throw new HttpException(
				`User was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the user already has a team. If it does, it is throwing an error. */
		if (candidate.team) {
			throw new HttpException(
				`User with this email: ${candidate.email} already has a team!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const team = await this.getTeamById(dto.teamid);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!team) {
			throw new HttpException(
				`This team doesn't exist: ${dto.teamid} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		if (team.type === 'closed' || team.type === 'invite-only') {
			throw new HttpException(
				`This team is currently closed or invite-only. You can't join it.`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the team has 8 members. If it does, it is throwing an error. */
		if (Number(team.members.length) === 8) {
			throw new HttpException(
				`Team already have 8 members inside!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// TODO: check if after user joined length is equal to 8 => make team type 'closed'

		/* Adding the user to the team. */
		const updated = await this.teamModel.findOneAndUpdate(
			{ _id: team._id },
			{ $push: { members: candidate._id } },
			{ new: true },
		);

		/* Adding the team to the user. */
		await this.userService.addTeam(candidate._id, team._id);

		return updated;
	}

	/**
	 * It removes a user from a team
	 * @param {TeamMembershipDTO} dto - TeamMembershipDTO
	 * @returns The updated team.
	 */
	async leaveTeam(dto: TeamMembershipDTO): Promise<Team> {
		const candidate = await this.userService.getUserById(dto.user_id);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!candidate) {
			throw new HttpException(
				`User was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the user already has a team. If it does, it is throwing an error. */
		if (!candidate.team) {
			throw new HttpException(
				`User with this email: ${candidate.email} has no team!`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const team = await this.getTeamById(dto.teamid);

		/* Checking if the user exists. If it doesn't, it is throwing an error. */
		if (!team) {
			throw new HttpException(
				`This team doesn't exist: ${dto.teamid} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// check if user is actually in team

		if (!candidate.team._id.equals(dto.teamid)) {
			throw new HttpException(
				`The team ${team.name} doesn't have this user: ${candidate.username}`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// TODO: in the future, check if user is signed up for the tournament before allowing to leave the team

		/* Removing the user to the team. */
		const updated = await this.teamModel.findOneAndUpdate(
			{ _id: team._id },
			{ $pull: { members: candidate._id } },
			{ new: true },
		);

		/* Removing the team from the user. */
		await this.userService.removeTeam(candidate._id);

		return updated;
	}

	/**
	 * Updating the team with the given teamid with the new data and returning the updated team
	 * @param {UpdateTeamDto} dto - UpdateTeamDto - The dto that is passed in from the controller.
	 * @returns The updated team.
	 */
	async updateTeam(dto: UpdateTeamDto): Promise<Team> {
		// check if dto has extra fields that we don't want to allow
		const filteredDto = await teamUpdateValidate(dto);

		const team = await this.getTeamById(dto.teamid);

		if (!team) {
			throw new HttpException(
				`The team with id: ${dto.teamid} does not exist`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Updating the team with the given teamid with the new data and returning the updated team. */
		const updated = await this.teamModel.findOneAndUpdate(
			{ _id: dto.teamid },
			{ ...filteredDto },
			{ new: true },
		);

		return updated;
	}

	/**
	 * "Remove a member from a team."
	 *
	 * The first line of the function is a comment. It's a comment that describes the function
	 * @param {TeamMembershipDTO} dto - TeamMembershipDTO
	 * @returns Team
	 */
	async removeMember(dto: TeamMembershipDTO): Promise<Team> {
		return await this.leaveTeam(dto);
	}

	/**
	 * It deletes a team
	 * @param teamId - The id of the team to be deleted.
	 * @returns The team object
	 */
	async deleteTeam(teamId: mongoose.Types.ObjectId): Promise<Object> {
		const team = await this.getTeamById(teamId);

		if (!team) {
			throw new HttpException(
				`The team with id: ${teamId} does not exist`,
				HttpStatus.BAD_REQUEST,
			);
		}

		if (team.members.length > 1) {
			throw new HttpException(
				`Before deleting, you must remove all members`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// TODO: Check if team is not in tournament

		// delete team for leader
		await this.userService.removeTeam(team.leader._id);

		// delete team itself
		await this.teamModel.findOneAndDelete({ _id: team._id });

		return { status: 'removed' };
	}

	/**
	 * > If the `membersLength` property is present in the `TeamSearchDto` object, then we'll use it to
	 * filter the results, otherwise we'll just use the `TeamSearchDto` object as is
	 * @param {TeamSearchDto} dto - TeamSearchDto
	 * @returns An array of teams
	 */
	async findTeam(dto: TeamSearchDto): Promise<Team[]> {
		if ('membersLength' in dto) {
			const { membersLength, ...searchQueury } = dto;
			return await this.teamModel.find({
				...searchQueury,
				members: { $size: membersLength },
			});
		} else {
			return await this.teamModel.find(dto);
		}
	}

	/**
	 * This function transfers the leadership of a team to a new user, after checking if the new leader and
	 * the current leader belong to the same team and if the current leader is actually the leader of the
	 * team.
	 * @param {TransferLeaderDto} dto - TransferLeaderDto, which is a data transfer object containing the
	 * IDs of the current leader, the new leader, and the team they both belong to.
	 * @returns The `transferLeader` function returns a Promise that resolves to a `Team` object.
	 */
	async transferLeader(dto: TransferLeaderDto): Promise<Team> {
		// check if leader is valid user
		const leader = await this.userService.getUserById(dto.leader_id);
		if (!leader) {
			throw new HttpException(
				`User was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// check if new_leader is valid user
		const new_leader = await this.userService.getUserById(
			dto.new_leader_id,
		);
		if (!new_leader) {
			throw new HttpException(
				`User was not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// check if both leader and new_leader belogn to the same team
		if (
			!leader.team._id.equals(dto.teamid) ||
			!new_leader.team._id.equals(dto.teamid)
		) {
			throw new HttpException(
				`${dto.leader_id} and ${dto.new_leader_id} are not from the same team: ${dto.teamid}`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// check if leader is actually leader of the team
		const team = await this.getTeamById(dto.teamid);

		if (!team.leader._id.equals(leader._id)) {
			throw new HttpException(
				`${dto.leader_id} is not leader of team ${dto.teamid}`,
				HttpStatus.BAD_REQUEST,
			);
		}

		// update leader of the team
		const newTeam = await this.teamModel.findOneAndUpdate(
			{ _id: team._id },
			{ leader: new_leader._id },
			{ new: true },
		);

		// TODO: add notification here to new leader that he is now leader of the team

		return newTeam;
	}
}
