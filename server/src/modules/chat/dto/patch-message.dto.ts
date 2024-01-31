import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class PatchMessagesDto {
  @ApiProperty({ example: 'new text of message' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  text?: string;

  @ApiProperty({ example: ['/reactionUnicode'] })
  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  @IsString({ each: true })
  reactions?: string[];

  @ApiProperty({ example: ['uuid1', 'uuid2'] })
  @IsBoolean()
  @IsOptional()
  read?: boolean;
}
