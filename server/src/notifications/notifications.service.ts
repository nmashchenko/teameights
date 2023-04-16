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
			message: dto.message,
			from_user_id: dto.from_user_id,
			to_user_email: dto.to_user_email,
			status: dto.status,
			read: false,
			expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
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

	/**
	 * This function reads a notification by updating its "read" status to true and returning the updated
	 * notification.
	 * @param notificationid - The ID of the notification that needs to be read. It is of type
	 * mongoose.Types.ObjectId, which is a unique identifier used by MongoDB.
	 * @returns A `Promise` that resolves to a `Notification` object after updating the `read` property of
	 * the notification with the given `notificationid` to `true`.
	 */
	async readNotification(
		notificationid: mongoose.Types.ObjectId,
	): Promise<Notification> {
		const notification = await this.getTeamNotificationById(notificationid);

		if (!notification) {
			throw new HttpException(
				`Notification with this id: ${notificationid} not found`,
				HttpStatus.BAD_REQUEST,
			);
		}

		return await this.notificationModel.findOneAndUpdate(
			{ _id: notificationid },
			{ read: true },
			{ new: true },
		);
	}
}
