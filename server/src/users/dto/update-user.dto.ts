import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
	IsArray,
	IsBoolean,
	IsDate,
	IsEmail,
	IsEmpty,
	IsNotEmpty,
	IsObject,
	IsOptional,
	IsString,
	IsUrl,
	Length,
	ValidateNested,
} from 'class-validator';
import { JobDataDto } from './job-data.dto';
import { LinksUserDto } from './links-user.dto';
import { UniversityDataDto } from './university-data.dto';

export class UpdateUserDto {
	@ApiProperty({ example: 'test@teameights.com', description: 'Email' })
	@IsString({ message: 'Should be string' })
	@IsEmail({}, { message: 'Email is not correct' })
	@IsNotEmpty({ message: 'Should not be empty' })
	readonly email: string;

	@ApiProperty({ example: 'teameights', description: 'Username' })
	@IsString({ message: 'Should be string' })
	@Length(1, 20, {
		message: 'Should be at least 8 and less than 20 characters',
	})
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly username: string;

	@ApiProperty({ example: 'Nikita Mashchenko', description: 'Full Name' })
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly fullName: string;

	@ApiProperty({ example: '17', description: 'Age of user' })
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly age: string;

	@ApiProperty({
		example: '20 y.o. developer from Ukraine',
		description: 'Description of user',
	})
	@IsString({ message: 'Should be string' })
	@IsOptional()
	readonly description: string;

	@ApiProperty({
		example: 'Frontend Developer',
		description: 'Concentration of user',
	})
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly concentration: string;

	@ApiProperty({
		example: '2016-05-18T14:10:30Z',
		description: 'Birthday of user',
	})
	@IsDate()
	@IsOptional()
	readonly birthDate: Date;

	@ApiProperty({ example: 'Ukraine', description: 'Country of user' })
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly country: string;

	@ApiProperty({
		example: '0-1 years',
		description: 'How many years of experience user has',
	})
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly experience: string;

	@ApiProperty({
		example: 'true',
		description: 'Does user want to be leader of team?',
	})
	@IsBoolean({ message: 'Should be boolean' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly isLeader: Boolean;

	@ApiProperty({
		example: {
			github: 'https://github.com',
			linkedin: 'https://linkedin.com',
			instagram: 'https://instagram.com',
			telegram: 'https://telegram.com',
		},
		description: 'Links of the user',
	})
	@IsObject({ message: 'Should be object' })
	@ValidateNested()
	@Type(() => LinksUserDto)
	@IsOptional()
	readonly links: LinksUserDto;

	@ApiProperty({
		example: ['JS', 'C++'],
		description: 'Programming languages',
	})
	@IsArray({ message: 'Should be array' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsOptional()
	readonly programmingLanguages: string[];

	@ApiProperty({ example: ['NestJS', 'NodeJS'], description: 'Frameworks' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsArray({ message: 'Should be array' })
	@IsOptional()
	readonly frameworks: string[];

	@ApiProperty({
		example: [
			{
				university: 'UIC',
				degree: `Bachelor's degree`,
				major: 'Computer Science',
				addmissionDate: '2016-05-18T14:10:30Z',
				graduationDate: '2020-05-18T14:10:30Z',
			},
		],
		description: 'University data of the user',
	})
	@IsObject({ message: 'Should be object' })
	@ValidateNested()
	@Type(() => UniversityDataDto)
	@IsOptional()
	readonly universityData: UniversityDataDto;

	@ApiProperty({
		example: [
			{
				title: 'SWE',
				company: `Spotify`,
				startDate: '2016-05-18T14:10:30Z',
				endDate: '2020-05-18T14:10:30Z',
			},
		],
		description: 'Job data of the user',
	})
	@IsObject({ message: 'Should be object' })
	@ValidateNested()
	@Type(() => JobDataDto)
	@IsOptional()
	readonly jobData: JobDataDto;
}
