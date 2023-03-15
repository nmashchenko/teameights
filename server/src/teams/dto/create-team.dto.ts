import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
	IsArray,
	IsMongoId,
	IsObject,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
	ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

class TeamMembersDto {
	@ApiProperty({
		example: '["vasya@test.com", "sanya@test.com"]',
		description: 'Emails of members',
	})
	@IsArray()
	@IsOptional()
	readonly emails: string[];

	@ApiProperty({
		example: '["6410a4ac77acfab9a0ca2d27", "6410a4b6d66125f0d4e9183b"]',
		description: 'Ids of members',
	})
	@IsArray()
	@IsOptional()
	readonly ids: mongoose.Types.ObjectId[];
}

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

	@ApiProperty({ example: 'KhaG', description: 'Tag of the team' })
	@IsString()
	@MaxLength(5)
	@MinLength(1)
	readonly tag: string;

	@ApiProperty({
		example: {
			ids: ['6410b7119be9df54961c036e'],
			emails: ['test@test.com'],
		},
		description: 'Members of team',
	})
	@IsObject({ message: 'Should be object of type TeamMembersDto' })
	@ValidateNested()
	@Type(() => TeamMembersDto)
	@IsOptional()
	readonly members: TeamMembersDto;
}
