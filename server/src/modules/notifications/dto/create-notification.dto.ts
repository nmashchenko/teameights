import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class SystemNotificationDataDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Welcome to the platform!' })
  system_message: string;
}

@ApiExtraModels(SystemNotificationDataDto)
export class CreateNotificationDto {
  @ApiProperty({ example: '1' })
  @Transform(({ value }) => (value ? Number(value) : undefined))
  @IsNumber()
  receiver: number;

  @ApiProperty({ enum: ['system', 'friend_request'] })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(['system', 'friend_request'], { message: 'mustBeValidType' })
  type: 'system' | 'friend_request';

  @ApiProperty()
  @IsNotEmpty()
  @IsObject({ message: 'Should be object' })
  @ValidateNested()
  @Type(() => SystemNotificationDataDto)
  @IsOptional()
  data?: SystemNotificationDataDto;
}

// export class TeamInvNotificationDataDto {
//   @ApiProperty({ example: 'nmashchenko' })
//   @Transform(lowerCaseTransformer)
//   @IsNotEmpty()
//   @IsOptional()
//   from_user: string;
//
//   @IsString()
//   @IsNotEmpty()
//   teamTo: string;
//
//   @IsString()
//   @IsOptional()
//   message?: string;
// }
