import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class TeamMembershipDTO {
	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e071',
		description: 'ID of user who wants to join',
	})
	@IsMongoId()
	readonly user_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c6d71be6e0e071',
		description: 'ID of the team',
	})
	@IsMongoId()
	readonly teamid: mongoose.Types.ObjectId;
}
