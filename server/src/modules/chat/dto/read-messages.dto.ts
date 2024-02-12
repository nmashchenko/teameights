import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsString } from 'class-validator';

export class ReadMessagesDto {
  @ApiProperty({ example: ['uuid1', 'uuid2'] })
  @ArrayNotEmpty()
  @IsString({ each: true })
  message_ids: string[];
}
