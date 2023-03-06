import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class SignUpDto {
	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e074',
		description: 'ID of the tournament',
	})
	@IsMongoId()
	readonly t_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c6d71be6e0e071',
		description: 'ID of the team',
	})
	@IsMongoId()
	readonly team_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e071',
		description: 'ID of the frontend guy',
	})
	@IsMongoId()
	readonly frontend_id: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '5f6d336db0c3d71be6e0e071',
		description: 'ID of the backend guy',
	})
	@IsMongoId()
	readonly backend_id: mongoose.Types.ObjectId;
}
