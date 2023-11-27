import {ApiProperty} from "@nestjs/swagger";
import {ArrayNotEmpty, IsOptional} from "class-validator";

export class ProjectManagerDto {
  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  tools?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  frameworks?: string[];
}
