import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
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
import { Speciality, specialityValues } from '../../../../utils/types/specialities.type';
import { Experience, experienceValues } from '../../../../utils/types/experiences.type';
import { DesignerDto, DeveloperDto, ProjectManagerDto } from '../../../users/dto/skills.dto';

export class AuthUpdateDto {
  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists',
  })
  photo?: FileEntity;

  @ApiProperty({ example: 'John' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  fullName?: string;

  @ApiProperty({ example: 'nmashchenko' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsOptional()
  @Validate(IsNotExist, ['User'], {
    message: 'usernameAlreadyExists',
  })
  @IsAlphanumeric()
  username?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

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

  @ApiProperty({ enum: specialityValues })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(specialityValues, { message: 'Must be valid speciality type!' })
  speciality?: Speciality;

  @ApiProperty({ enum: experienceValues })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(experienceValues, { message: 'Must be valid experience type!' })
  experience?: Experience;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  description?: string;

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

  @ApiProperty({
    example: {
      coreTools: ['Figma'],
      speciality: 'Designer',
    },
    description: 'Skills based on specific group (developer, designer, pm)',
  })
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Object, {
    discriminator: {
      property: '__type',
      subTypes: [
        { value: DeveloperDto, name: 'dev' },
        { value: DesignerDto, name: 'designer' },
        { value: ProjectManagerDto, name: 'pm' },
      ],
    },
  })
  @IsOptional()
  skills?: DeveloperDto | DesignerDto | ProjectManagerDto;
}
