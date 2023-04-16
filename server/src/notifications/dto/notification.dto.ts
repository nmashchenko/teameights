import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsMongoId, IsOptional } from 'class-validator';
import mongoose from 'mongoose';
import { NotificationType } from '../notifications.enums';

export class NotificationDto {
	constructor() {}

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'User id',
	})
	@IsMongoId()
	readonly userid: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '2022-01-01T00:00:00.000Z',
		description: 'Date when the notification will expire',
	})
	@IsOptional()
	expiresAt?: Date;
}
