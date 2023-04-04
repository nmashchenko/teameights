import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class TransferLeaderDto {
	@ApiProperty({
		example: 'test@teameights.com',
		description: 'ID of the leader',
	})
	@IsString()
	readonly leader_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e071',
		description: 'ID of the new leader',
	})
	@IsMongoId()
	readonly new_leader_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c6d71be6e0e071',
		description: 'ID of the team',
	})
	@IsMongoId()
	readonly teamid: mongoose.Types.ObjectId;
}
