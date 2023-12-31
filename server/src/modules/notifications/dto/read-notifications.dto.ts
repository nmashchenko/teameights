import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty } from 'class-validator';

export class ReadNotificationsDto {
  @ApiProperty({ example: ['1', '2'] })
  @ArrayNotEmpty()
  notification_ids: string[];
}
