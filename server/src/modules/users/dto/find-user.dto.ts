import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from '../../../utils/transformers/lower-case.transformer';
import { Speciality, specialityValues } from '../../../utils/types/specialities.type';
import { Experience, experienceValues } from '../../../utils/types/experiences.type';

export class FindUserDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  fullName?: string;

  @ApiProperty({ example: 'nmashchenko' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsOptional()
  username?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  isLeader?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  country?: string;

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
  @ArrayNotEmpty()
  programmingLanguages?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty()
  frameworks?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty()
  projectManagerTools?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty()
  designerTools?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty()
  fields?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty()
  methodologies?: string[];
}
