import { User } from '@/users/users.schema';
import { ApiProperty } from '@nestjs/swagger';
import {
	Allow,
	IsArray,
	IsMongoId,
	IsString,
	ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

export class UpdateTeamDto {
	@ApiProperty({
		example: '5f6d8b6db0c6d71be3e0e072',
		description: 'Team that will be updated',
	})
	@IsMongoId()
	readonly teamid: mongoose.Types.ObjectId;

	@ApiProperty({
		example: '63f4e33915871acb03d7f054',
		description: 'User that is trying to update team',
	})
	@IsMongoId()
	readonly leader: mongoose.Types.ObjectId;

	@ApiProperty({ example: 'The A-Team', description: 'Name of the team' })
	@IsString()
	readonly name: string;

	@ApiProperty({
		example: 'A group of skilled individuals who work together on projects',
		description: 'Description of the team',
	})
	@IsString()
	readonly description: string;

	@ApiProperty({ example: 'Ukraine', description: 'Country of the team' })
	@IsString()
	readonly country: string;

	@ApiProperty({
		example: 'open',
		description: 'Type of invite: ["invite-only", "closed", "open"]',
	})
	@IsString({ message: 'Type of invite: ["invite-only", "closed", "open"]' })
	readonly type: string;

	// @ApiProperty({
	// 	example: ['5f6d8b6db0c6d71be6e0e071', '5f6d8b6db0c6d71be6e0e072'],
	// 	description: 'IDs of the members of the team',
	// })
	// @IsArray()
	// readonly members: [User];
}
