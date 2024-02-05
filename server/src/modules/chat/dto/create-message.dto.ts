import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({ example: [1, 2, 3] })
  @ArrayNotEmpty()
  @IsArray()
  @IsInt({ each: true })
  receivers!: number[];

  @ApiProperty({ example: 'groupname' })
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  group?: string;

  @ApiProperty({ example: 'lorem ipsum...' })
  @IsNotEmpty()
  text!: string;
}
