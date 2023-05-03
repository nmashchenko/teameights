import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

import { Team } from '@/teams/teams.schema';
import { User } from '@/users/users.schema';

@Schema({})
export class TeamInvitationNotification {
	type: string;

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of the team that sent the invitation',
	})
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true })
	teamid: Team;

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of user that sent invite',
		required: true,
	})
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	from_user_id: User;

	@ApiProperty({
		example: 'test@teameights.com',
		description: 'User email',
		required: true,
	})
	@Prop({ required: true, type: String })
	to_user_email: string;

	@ApiProperty({
		example: 'pending',
		description: 'Status of invite',
	})
	@Prop({
		required: true,
		type: String,
		enum: ['pending', 'accepted', 'rejected'],
		default: 'pending',
	})
	status: string;

	@ApiProperty({
		example:
			'${SERVER.URL}/image/users/29ae40b5-96ff-47e2-89bc-61060386f252.jpg',
		description: 'Image of notification',
	})
	@Prop({
		required: true,
		type: String,
	})
	image: string;

	@ApiProperty({
		example: 'You were invited to team!',
		description: 'Notification message',
	})
	@Prop({ required: true, type: String })
	message: string;
}

export const TeamInvitationNotificationSchema = SchemaFactory.createForClass(
	TeamInvitationNotification,
);
