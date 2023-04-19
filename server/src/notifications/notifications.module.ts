import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
	Notifications,
	NotificationsSchema,
} from './schemas/notifications.schema';
import { NotificationsService } from './notifications.service';
import {
	TeamInvitationNotification,
	TeamInvitationNotificationSchema,
} from './schemas/team-invite.schema';
import { User, UserSchema } from '@Users/users.schema';
import { UsersModule } from '@Users/users.module';
import {
	SystemNotification,
	SystemNotificationSchema,
} from './schemas/system.schema';
import { MailsModule } from '@/mails/mails.module';
import { NotificationsController } from './notifications.controller';
import { AuthModule } from '@/auth/auth.module';
import { TokensModule } from '@/tokens/tokens.module';
import { NotificationsGateway } from './notifications.gateway';

@Module({
	providers: [NotificationsService, NotificationsGateway],
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
