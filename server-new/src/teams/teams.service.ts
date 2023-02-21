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

@Injectable()
export class TeamsService {
	constructor(
		@InjectModel(Team.name) private teamModel: Model<TeamsDocument>,
		private readonly userService: UsersService,
		private readonly filesService: FileService,
		private readonly notificationsService: NotificationsService,
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

		/* Creating a team with the given data. */
		const team = await this.teamModel.create({
			name: dto.name,
			description: dto.description,
			leader: dto.leader,
			members: [dto.leader],
			country: dto.country,
			type: dto.type,
			wins: 0,
			points: 0,
		});

		/* Adding the team to the user. */
		await this.userService.addTeam(candidate._id, team._id);

		return team;
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
	async updateTeamAvatar(dto: UpdateTeamAvatarDto): Promise<string> {
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
		await this.teamModel.findOneAndUpdate(
			{ _id: dto.teamID },
			{ image: filePath },
		);

		return filePath;
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
	async inviteToTeam(dto: InviteToTeamDto): Promise<Object> {
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

		// TODO: send info about invite on email

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

		console.log(notification);
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

	async joinTeam(dto: TeamMembershipDTO): Promise<Object> {
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
		await this.teamModel.updateOne(
			{ _id: team._id },
			{ $push: { members: candidate._id } },
		);

		/* Adding the team to the user. */
		await this.userService.addTeam(candidate._id, team._id);

		return {
			status: `${candidate.email} joined team ${team.name}!`,
		};
	}

	async leaveTeam(dto: TeamMembershipDTO): Promise<Object> {
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

		// TODO: in the future, check if user is signed up for the tournament before allowing to leave the team

		/* Removing the user to the team. */
		await this.teamModel.updateOne(
			{ _id: team._id },
			{ $pull: { members: candidate._id } },
		);

		/* Removing the team from the user. */
		await this.userService.removeTeam(candidate._id);

		return {
			status: `${candidate.email} left team ${team.name}!`,
		};
	}

	// TODO: add delete the team function

	// TODO: add update the team function
}
