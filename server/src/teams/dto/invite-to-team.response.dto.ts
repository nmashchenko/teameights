import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class InviteToTeamResponseDto {
	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e071',
		description: 'information',
	})
	@IsMongoId()
	readonly status: string;

	@ApiProperty({
		example: '5f6d336db0c6d71be6e0e071',
		description: 'ID of notification',
	})
	@IsMongoId()
	readonly notificationID: mongoose.Types.ObjectId;
}
