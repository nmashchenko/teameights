import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/libs/database/metadata/roles/entities/role.entity';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsObject,
  IsOptional,
  MinLength,
  Validate,
  ValidateNested,
} from 'class-validator';
import { Status } from 'src/libs/database/metadata/statuses/entities/status.entity';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { FileEntity } from 'src/modules/files/entities/file.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { UniversitiesDto } from './universities.dto';
import { JobsDto } from './jobs.dto';
import { ProjectsDto } from './projects.dto';
import { LinksDto } from './links.dto';

export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists',
  })
  @IsEmail()
  email: string | null;

  @ApiProperty({ example: 'nmashchenko' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsOptional()
  @Validate(IsNotExist, ['User'], {
    message: 'usernameAlreadyExists',
  })
  username?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  fullName?: string | null;

  @ApiProperty()
  @MinLength(6)
  password?: string;

  provider?: string;

  socialId?: string | null;

  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists',
  })
  photo?: FileEntity | null;

  @ApiProperty({ type: Role })
  @Validate(IsExist, ['Role', 'id'], {
    message: 'roleNotExists',
  })
  role?: Role | null;

  @ApiProperty({ type: Status })
  @Validate(IsExist, ['Status', 'id'], {
    message: 'statusNotExists',
  })
  status?: Status;

  hash?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  isLeader?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  country?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  dateOfBirth?: Date;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  concentration?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  description?: string;

  @ApiProperty({ enum: ['0-1 years', '1-3 years', '3-5 years', '5+ years'] })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(['beginner', 'intermediate', 'advanced'], { message: 'mustBeValidExperience' })
  experience?: '0-1 years' | '1-3 years' | '3-5 years' | '5+ years';

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  programmingLanguages?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  frameworks?: string[];

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
