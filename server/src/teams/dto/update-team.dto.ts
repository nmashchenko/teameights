import { ApiProperty } from '@nestjs/swagger';
import {
	IsEnum,
	IsMongoId,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';
import mongoose from 'mongoose';

import { User } from '@/users/users.schema';

import { TeamType } from '../types/teams.type';

export class UpdateTeamDto {
	@ApiProperty({
		example: '5f6d8b6db0c6d71be3e0e072',
		description: 'Team that will be updated',
	})
	@IsMongoId()
	readonly teamid: mongoose.Types.ObjectId;

	@ApiProperty({ example: 'The A-Team', description: 'Name of the team' })
	@IsString()
	@IsOptional()
	readonly name?: string;

	@ApiProperty({
		example: 'A group of skilled individuals who work together on projects',
		description: 'Description of the team',
	})
	@IsString()
	@IsOptional()
	readonly description?: string;

	@ApiProperty({ example: 'Ukraine', description: 'Country of the team' })
	@IsString()
	@IsOptional()
	readonly country?: string;

	@ApiProperty({
		example: 'open',
		description: 'Type of invite: ["invite-only", "closed", "open"]',
		enum: TeamType,
	})
	@IsOptional()
	@IsEnum(TeamType, {
		message: 'Type of invite: ["invite-only", "closed", "open"]',
	})
	readonly type?: TeamType;

	@ApiProperty({ example: 'KhaG', description: 'Unique TAG of the team' })
	@IsString()
	@IsOptional()
	tag?: string;

	@ApiProperty({
		example: 3,
		description: 'Number of tournaments that the team has won',
	})
	@IsOptional()
	@IsNumber()
	readonly wins?: number;

	@ApiProperty({
		example: 10,
		description:
			'Number of points that the team has earned in the tournaments',
	})
	@IsOptional()
	@IsNumber()
	readonly points?: number;
}
