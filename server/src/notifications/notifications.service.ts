import { UsersService } from '@Users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { ClientSession, Model } from 'mongoose';
import { TeamInvitationNotification } from './schemas/team-invite.schema';
import { NotificationType } from './notifications.enums';
import { SystemNotification } from './schemas/system.schema';
import { SystemNotificationDto } from './dto/system-notification.dto';
import { TeamNotificationsDto } from './dto/team-notification.dto';
import { MailsService } from '@/mails/mails.service';
import { Notifications } from './schemas/notifications.schema';
import { ReadNotificationsDto } from './dto/read-notifications.dto';

@Injectable()
export class NotificationsService {
	constructor(
		@InjectModel(Notifications.name)
		private readonly notificationModel: Model<Notifications>,
		@InjectModel(TeamInvitationNotification.name)
		private readonly teamNotificationModel: Model<TeamInvitationNotification>,
		@InjectModel(SystemNotification.name)
		private readonly systemNotificationModel: Model<SystemNotification>,
		private mailsService: MailsService,
	) {}

	/**
	 * It creates a system notification for a user
	 * @param {SystemNotificationDto} dto - SystemNotificationDto
	 * @param {ClientSession} [session] - This is the session that is passed to the method.
	 * @returns The id of the notification that was created.
	 */
	async createSystemNotification(
		dto: SystemNotificationDto,
		session?: ClientSession,
	): Promise<mongoose.Types.ObjectId> {
		const notification = {
			user: dto.userid,
			type: NotificationType.system,
			system_message: dto.system_message,
			read: false,
			expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		};

		if (typeof session !== 'undefined') {
			const data = await this.systemNotificationModel.create(
				[notification],
				{ session },
			);
			return data[0]._id;
		} else {
			const data = await this.systemNotificationModel.create(
				notification,
			);
			return data._id;
		}
	}

	/**
	 * It creates a notification for a user to join a team
	 * @param {TeamNotificationsDto} dto - TeamNotificationsDto
	 * @param {ClientSession} [session] - ClientSession
	 * @returns The id of the notification
	 */
	async createTeamNotification(
		dto: TeamNotificationsDto,
		session?: ClientSession,
	): Promise<mongoose.Types.ObjectId> {
		const notification = {
			user: dto.userid,
			type: NotificationType.team_invite,
			teamid: dto.teamid,
			from_user_id: dto.from_user_id,
			to_user_email: dto.to_user_email,
			status: dto.status,
			read: false,
			expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			image: dto.image,
			message: dto.message,
		};

		if (typeof session !== 'undefined') {
			const data = await this.teamNotificationModel.create(
				[notification],
				{ session },
			);
			return data[0]._id;
		} else {
			const data = await this.teamNotificationModel.create(notification);
			return data._id;
		}
	}

	/**
	 * It removes a notification from the database.
	 * @param notificationid - The id of the notification to be removed.
	 * @returns The result of the deleteOne() method.
	 */
	async removeNotification(notificationid: mongoose.Types.ObjectId) {
		return await this.notificationModel.deleteOne({ _id: notificationid });
	}

	/**
	 * This function returns a TeamNotificationsDto object from the database based on the notificationid
	 * passed in.
	 * @param notificationid - mongoose.Types.ObjectId
	 * @returns TeamNotificationsDto
	 */
	async getTeamNotificationById(
		notificationid: mongoose.Types.ObjectId,
	): Promise<TeamNotificationsDto> {
		return await this.notificationModel.findById(notificationid);
	}

	/**
	 * It returns an array of TeamNotificationsDto objects, which are notifications that are sent to a
	 * user, and are related to a team
	 * @param userid - mongoose.Types.ObjectId,
	 * @param [teamid] - mongoose.Types.ObjectId
	 * @returns TeamNotificationsDto[]
	 */
	async getTeamNotificationsForUser(
		userid: mongoose.Types.ObjectId,
		teamid?: mongoose.Types.ObjectId,
	): Promise<TeamNotificationsDto[]> {
		if (typeof teamid !== 'undefined') {
			return await this.notificationModel.find({
				user: userid,
				type: 'TeamInvitationNotification',
				teamid,
			});
		} else {
			return await this.notificationModel.find({
				user: userid,
				type: 'TeamInvitationNotification',
			});
		}
	}

	async readNotification(dto: ReadNotificationsDto): Promise<Object> {
		let error: number = 0;
		let success: number = 0;

		for (let i = 0; i < dto.notifications.length; i++) {
			const notification = await this.getTeamNotificationById(
				dto.notifications[i],
			);

			if (!notification) {
				error++;
			} else {
				const test = await this.notificationModel.findOneAndUpdate(
					{ _id: dto.notifications[i] },
					{ read: true },
					{ new: true },
				);
				console.log(test);
				success++;
			}
		}

		return {
			staus: `Updated ${success} notifications: `,
			errors: `We didn't find ${error} notifications`,
		};
	}
}
