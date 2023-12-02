import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsOptional } from 'class-validator';

export class ProjectManagerDto {
  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  projectManagerTools?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  methodologies?: string[];
}
