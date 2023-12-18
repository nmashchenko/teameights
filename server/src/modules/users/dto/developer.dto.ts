import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsOptional } from 'class-validator';

export class DeveloperDto {
  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  programmingLanguages?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  frameworks?: string[];
}
