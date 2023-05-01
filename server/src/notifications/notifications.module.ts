import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@Users/users.schema';

import { MailsModule } from '@/mails/mails.module';

import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import {
	Notifications,
	NotificationsSchema,
} from './schemas/notifications.schema';
import {
	SystemNotification,
	SystemNotificationSchema,
} from './schemas/system.schema';
import {
	TeamInvitationNotification,
	TeamInvitationNotificationSchema,
} from './schemas/team-invite.schema';

@Module({
	providers: [NotificationsService],
	exports: [NotificationsService],
	imports: [
		MongooseModule.forFeature([
			{
				name: Notifications.name,
				schema: NotificationsSchema,
				discriminators: [
					{
						name: TeamInvitationNotification.name,
						schema: TeamInvitationNotificationSchema,
					},
					{
						name: SystemNotification.name,
						schema: SystemNotificationSchema,
					},
				],
			},
		]),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MailsModule,
		// AuthModule,
		// TokensModule,
	],
	controllers: [NotificationsController],
})
export class NotificationsModule {}
