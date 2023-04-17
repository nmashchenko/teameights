import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class ReadNotificationsDto {
	@ApiProperty({
		example: '["643d87634651a74322d85eb5"]',
		description: 'Notification ids',
	})
	@IsMongoId()
	readonly notifications: [mongoose.Types.ObjectId];
}
