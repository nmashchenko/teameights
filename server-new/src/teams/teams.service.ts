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

		/* Creating a team with the given data. */
		const team = await this.teamModel.create({
			name: dto.name,
			description: dto.description,
			leader: dto.leader,
			members: [dto.leader],
			country: dto.country,
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

	async getAllTeams(): Promise<Team[]> {
		return await this.teamModel
			.find({})
			.populate('members')
			.populate('leader');
	}

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

		return {
			status: `${candidate.fullName} invited to team ${team.name} with id ${team._id}!`,
		};
	}
}
