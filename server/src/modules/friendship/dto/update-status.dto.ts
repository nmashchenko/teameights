import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({ example: 'accepted' })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsString()
  @IsIn(['accepted', 'rejected'], { message: 'mustBeValidType' })
  status: 'accepted' | 'rejected';
}
