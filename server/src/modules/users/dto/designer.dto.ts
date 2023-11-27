import {ApiProperty} from "@nestjs/swagger";
import {ArrayNotEmpty, IsOptional} from "class-validator";

export class DesignerDto {
  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  fields?: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  tools?: string[];
}
