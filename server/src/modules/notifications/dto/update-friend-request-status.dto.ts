import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateFriendRequestStatusDto {
  @ApiProperty({ example: '1' })
  @Transform(({ value }) => (value ? Number(value) : undefined))
  @IsNumber()
  notificationId: number;
  @ApiProperty({ enum: ['accepted', 'rejected'] })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(['accepted', 'rejected'], { message: 'mustBeValidType' })
  status: 'accepted' | 'rejected';
}
