import { UsersService } from '@Users/users.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { ClientSession, Model } from 'mongoose';
import { TeamInvitationNotification } from './schemas/team-invite.schema';
import { NotificationType } from './notifications.enums';
import { SystemNotification } from './schemas/system.schema';
import { SystemNotificationDto } from './dto/system-notification.dto';
import { TeamNotificationsDto } from './dto/team-notification.dto';
import { MailsService } from '@/mails/mails.service';

@Injectable()
export class NotificationsService {
	constructor(
		@InjectModel(TeamInvitationNotification.name)
		private readonly teamNotificationModel: Model<TeamInvitationNotification>,
		@InjectModel(SystemNotification.name)
		private readonly systemNotificationModel: Model<SystemNotification>,
		private mailsService: MailsService,
	) {}

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
			await this.mailsService.sendTeamInviteEmail(data.to_user_email);
			return data._id;
		}
	}
}
