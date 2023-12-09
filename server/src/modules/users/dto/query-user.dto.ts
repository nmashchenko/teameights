import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { plainToInstance, Transform, Type } from 'class-transformer';
import { lowerCaseTransformer } from '../../../utils/transformers/lower-case.transformer';
import { Speciality, specialityValues } from '../../../utils/types/specialities.type';
import { Experience, experienceValues } from '../../../utils/types/experiences.type';
import { User } from '../entities/user.entity';

export class SortUserDto {
  @ApiProperty()
  @IsString()
  orderBy: keyof User;

  @ApiProperty()
  @IsString()
  order: string;
}

export class FilterUserDto {
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
  @ArrayNotEmpty()
  countries?: string[];

  @ApiProperty({
    type: [String],
    enum: specialityValues,
  })
  @IsOptional()
  @ArrayNotEmpty()
  @IsIn(specialityValues, { each: true })
  specialities?: Speciality[];

  @ApiProperty({ enum: experienceValues })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(experienceValues)
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

export class QueryUserDto {
  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page: number;

  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit: number;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => (value ? plainToInstance(FilterUserDto, JSON.parse(value)) : undefined))
  @ValidateNested()
  @Type(() => FilterUserDto)
  filters?: FilterUserDto | null;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(SortUserDto, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortUserDto)
  sort?: SortUserDto[] | null;
}
