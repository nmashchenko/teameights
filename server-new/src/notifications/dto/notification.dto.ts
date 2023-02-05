import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsMongoId, IsOptional } from 'class-validator';
import mongoose from 'mongoose';
import { NotificationType } from '../notifications.enums';

export class NotificationDto {
	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'User id',
	})
	@IsMongoId()
	readonly userid: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '/teams/5f6d8b6db0c6d71be6e0e070',
		description: 'URL of the relevant content',
	})
	@IsOptional()
	readonly url?: string;
}
