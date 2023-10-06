import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/libs/database/metadata/roles/entities/role.entity';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  Length,
  MinLength,
  Validate,
  ValidateNested,
} from 'class-validator';
import { Status } from 'src/libs/database/metadata/statuses/entities/status.entity';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { FileEntity } from 'src/modules/files/entities/file.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { UniversityData } from '../entities/university-data.entity';
import { UniversityDataDto } from './university.dto';

export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists',
  })
  @IsEmail()
  email: string | null;

  @ApiProperty({ example: 'teameights', description: 'Username' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsOptional()
  @Length(1, 20, {
    message: 'Should be at least 8 and less than 20 characters',
  })
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
        addmissionDate: '2016-05-18T14:10:30Z',
        graduationDate: '2020-05-18T14:10:30Z',
      },
    ],
    description: 'University data of the user',
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UniversityDataDto)
  universityData?: UniversityDataDto[];
}
