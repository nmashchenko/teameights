import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsIn, IsNotEmpty, IsOptional, MinLength, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { FileEntity } from 'src/modules/files/entities/file.entity';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from '../../../../utils/transformers/lower-case.transformer';
import { IsNotExist } from '../../../../utils/validators/is-not-exists.validator';

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
}
