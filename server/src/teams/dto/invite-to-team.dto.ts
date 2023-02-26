import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class InviteToTeamDto {
	@ApiProperty({
		example: 'test@teameights.com',
		description: 'Email of the user',
	})
	@IsString()
	readonly email: string;

	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e071',
		description: 'ID of user who invited this user',
	})
	@IsMongoId()
	readonly from_user_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c6d71be6e0e071',
		description: 'ID of the team',
	})
	@IsMongoId()
	readonly teamid: mongoose.Types.ObjectId;
}
