import { ApiProperty } from '@nestjs/swagger';
import {
	IsOptional,
	IsString,
	Max,
	MaxLength,
	Min,
	MinLength,
} from 'class-validator';

export class TeamSearchDto {
	@ApiProperty({ example: 'The A-Team', description: 'Name of the team' })
	@IsString()
	@IsOptional()
	readonly name: string;

	@ApiProperty({ example: 'Ukraine', description: 'Country of the team' })
	@IsString()
	@IsOptional()
	readonly country: string;

	@ApiProperty({ example: 'KhaG', description: 'Tag of the team' })
	@IsString()
	@MaxLength(5)
	@MinLength(1)
	@IsOptional()
	readonly tag: string;

	@ApiProperty({ example: 1, description: 'How many people in team' })
	@Max(7)
	@Min(1)
	@IsOptional()
	readonly membersLength: number;
}
