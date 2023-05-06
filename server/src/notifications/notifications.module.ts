import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '@/auth/auth.module';
import { MailsModule } from '@/mails/mails.module';
import { TokensModule } from '@/tokens/tokens.module';
import { User, UserSchema } from '@/users/users.schema';

import { NotificationsController } from './notifications.controller';
import { NotificationsGateway } from './notifications.gateway';
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
	providers: [NotificationsService, NotificationsGateway],
	controllers: [NotificationsController],
})
export class NotificationsModule {}
