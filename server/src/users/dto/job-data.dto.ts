import { ApiProperty } from '@nestjs/swagger';
import {
	IsDate,
	IsDateString,
	IsDefined,
	IsNotEmpty,
	IsOptional,
	IsString,
} from 'class-validator';

export class JobDataDto {
	@ApiProperty({ example: 'SWE', description: 'Job title' })
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly title: string;

	@ApiProperty({
		example: `Spotify`,
		description: 'Company name',
	})
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly company: string;

	@ApiProperty({
		example: `2016-05-18T14:10:30Z`,
		description: 'startDate in UTC',
	})
	@IsDateString()
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly startDate: Date;

	@ApiProperty({
		example: `2016-05-18T14:10:30Z`,
		description: 'endDate in UTC',
	})
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDateString()
	@IsDefined()
	@IsOptional()
	readonly endDate: Date;
}