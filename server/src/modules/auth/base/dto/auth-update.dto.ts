import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsObject,
  IsOptional,
  Length,
  MinLength,
  Validate,
  ValidateNested,
} from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { FileEntity } from 'src/modules/files/entities/file.entity';
import { Transform, Type } from 'class-transformer';
import { lowerCaseTransformer } from '../../../../utils/transformers/lower-case.transformer';
import { IsNotExist } from '../../../../utils/validators/is-not-exists.validator';
import { UniversitiesDto } from '../../../users/dto/universities.dto';
import { JobsDto } from '../../../users/dto/jobs.dto';
import { ProjectsDto } from '../../../users/dto/projects.dto';
import { LinksDto } from '../../../users/dto/links.dto';

export class AuthUpdateDto {
  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists',
  })
  photo?: FileEntity;

  @ApiProperty({ example: 'Nikita Mashchenko', description: 'Full Name' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  fullName?: string;

  @ApiProperty({ example: 'teameights', description: 'Username' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsOptional()
  @Length(1, 20)
  @Validate(IsNotExist, ['User'], {
    message: 'usernameAlreadyExists',
  })
  username?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiProperty({
    example: 'true',
    description: 'Does user want to be leader of team?',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  isLeader?: boolean;

  @ApiProperty({ example: 'Ukraine', description: 'Country of user' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  country?: string;

  @ApiProperty({ example: new Date(), description: 'Date of birth' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsDateString()
  dateOfBirth?: Date;

  @ApiProperty({
    example: 'Frontend Developer',
    description: 'Concentration of user',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  concentration?: string;

  @ApiProperty({
    example: '20 y.o. developer from Ukraine',
    description: 'Description of user',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  description?: string;

  @ApiProperty({
    enum: ['0-1 years', '1-3 years', '3-5 years', '5+ years'],
    example: '0-1 years',
    description: 'How many years of experience user has',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(['beginner', 'intermediate', 'advanced'], { message: 'mustBeValidExperience' })
  experience?: '0-1 years' | '1-3 years' | '3-5 years' | '5+ years';

  @ApiProperty({
    example: ['JS', 'C++'],
    description: 'Programming languages',
  })
  @IsOptional()
  @ArrayNotEmpty()
  programmingLanguages?: string[];

  @ApiProperty({ example: ['NestJS', 'NodeJS'], description: 'Frameworks' })
  @IsOptional()
  @ArrayNotEmpty()
  frameworks?: string[];

  @ApiProperty({
    example: [
      {
        university: 'UIC',
        degree: `Bachelor's degree`,
        major: 'Computer Science',
        addmissionDate: '2016-05-18T14:10:30',
        graduationDate: '2020-05-18T14:10:30',
      },
    ],
    description: 'University data of the user',
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UniversitiesDto)
  universities?: UniversitiesDto[];

  @ApiProperty({
    example: [
      {
        title: 'SWE',
        company: `Spotify`,
        startDate: '2016-05-18T14:10:30',
        endDate: '2020-05-18T14:10:30',
      },
    ],
    description: 'Job data of the user',
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => JobsDto)
  jobs?: JobsDto[];

  @ApiProperty({
    example: [
      {
        title: `Teameights`,
        link: 'https://teameights.com',
      },
    ],
    description: 'Project data of the user',
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProjectsDto)
  projects?: ProjectsDto[];

  @ApiProperty({
    example: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      behance: 'https://behance.com',
      telegram: 'https://telegram.com',
    },
    description: 'Links of the user',
  })
  @IsObject({ message: 'Should be object' })
  @ValidateNested()
  @Type(() => LinksDto)
  @IsOptional()
  links?: LinksDto;
}
