import { Team } from '@/teams/teams.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';
import { NotificationDto } from './notification.dto';

export class TeamNotificationsDto extends NotificationDto {
	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of the team that sent the invitation',
		required: true,
	})
	@IsMongoId()
	teamid: mongoose.Types.ObjectId;

	@ApiProperty({
		example: 'You were invited to team!',
		description: 'Notification message',
		required: true,
	})
	@IsString()
	message: string;

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of user that sent invite',
		required: true,
	})
	from_user_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: 'test@teameights.com',
		description: 'User email',
		required: true,
	})
	to_user_email: string;

	@ApiProperty({
		example: 'pending',
		description: 'Status of invite (either pending / accepted / rejected)',
		required: true,
		enum: ['pending', 'accepted', 'rejected'],
		default: 'pending',
	})
	status: string;
}
