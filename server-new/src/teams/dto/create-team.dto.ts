import { User } from '@/users/users.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreateTeamDto {
	@ApiProperty({ example: 'The A-Team', description: 'Name of the team' })
	@IsString()
	readonly name: string;

	@ApiProperty({
		example: 'A group of skilled individuals who work together on projects',
		description: 'Description of the team',
	})
	@IsString()
	readonly description: string;

	@ApiProperty({
		example: '5f6d336db0c6d71be6e0e071',
		description: 'Leader of the team',
	})
	@IsMongoId()
	readonly leader: mongoose.Types.ObjectId;

	@ApiProperty({ example: 'Ukraine', description: 'Country of the team' })
	@IsString()
	readonly country: string;

	@ApiProperty({
		example: 'open',
		description: 'Type of invite: ["invite-only", "closed", "open"]',
	})
	@IsString({ message: 'Type of invite: ["invite-only", "closed", "open"]' })
	readonly type: string;
}
