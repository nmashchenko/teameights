import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Team } from '@Teams/teams.schema';
import { User } from '@Users/users.schema';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { NotificationType } from '../notifications.enums';
import { TeamInvitationNotification } from './team-invite.schema';

export type NotificationsDocument = HydratedDocument<Notifications>;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Notifications {
	_id: mongoose.Types.ObjectId;

	// user that receives notification
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user: User;

	@ApiProperty({
		example: 'team_invite',
		description: 'Type of notification',
	})
	@Prop({
		type: String,
		required: true,
		enum: Object.values(NotificationType),
	})
	type!: NotificationType;

	@ApiProperty({
		example: 'false',
		description: 'Whether the notification has been read',
		required: true,
	})
	@Prop({ required: true, type: Boolean })
	read: boolean;

	@ApiProperty({
		example: '2022-01-01T00:00:00.000Z',
		description: 'Date when the notification will expire',
	})
	@Prop({ required: true, type: Date })
	expiresAt: Date;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
