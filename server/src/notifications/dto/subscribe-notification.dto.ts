import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class SubscribeNotificationDto {
	@ApiProperty({
		example: '5f6d8b6db0c6d71be6e0e070',
		description: 'ID of user to subscribe for',
		required: true,
	})
	@IsMongoId()
	id: mongoose.Types.ObjectId;
}
