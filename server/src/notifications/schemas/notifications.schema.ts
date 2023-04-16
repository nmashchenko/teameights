import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@Users/users.schema';
import { Team } from '@Teams/teams.schema';
import { TeamInvitationNotification } from './team-invite.schema';
import { NotificationType } from '../notifications.enums';

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
	read: Boolean;

	@ApiProperty({
		example: '2022-01-01T00:00:00.000Z',
		description: 'Date when the notification will expire',
	})
	@Prop({ required: true, type: Date })
	expiresAt: Date;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
