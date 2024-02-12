import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateChatGroupDto {
  @ApiProperty({ example: 'groupname' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'some description' })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description?: string;

  @ApiProperty({ example: [1, 2, 6] })
  @IsOptional()
  //@ArrayNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false }, { each: true })
  //@Min(0, { each: true })
  members?: number[];
}
