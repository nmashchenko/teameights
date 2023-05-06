import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

import { NotificationType } from '../notifications.enums';

export class SubscribeNotificationResponseDto {
	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of notification',
	})
	@IsMongoId()
	_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: 'Welcome!',
		description: 'System message',
	})
	@IsString()
	system_message: string;

	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of user',
	})
	@IsMongoId()
	user: mongoose.Types.ObjectId;

	@ApiProperty({
		example: NotificationType.system,
		description: 'Type of notification',
	})
	@IsString()
	type: NotificationType;

	@ApiProperty({
		example: true,
		description: 'Status of notification',
	})
	@IsBoolean()
	read: boolean;

	@ApiProperty({
		example: '2022-01-01T00:00:00.000Z',
		description: 'Date when the notification will expire',
	})
	@IsDate()
	expiresAt: Date;

	@ApiProperty({
		example: '2022-02-01T00:00:00.000Z',
		description: 'Date when the notification was created',
	})
	@IsDate()
	createdAt: Date;

	@ApiProperty({
		example: '2022-03-01T00:00:00.000Z',
		description: 'Date when the notification was updated',
	})
	@IsDate()
	updatedAt: Date;
}
