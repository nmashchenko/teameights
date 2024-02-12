import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { ChatGroup } from '../entities/chat.group.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class CreateMessageDto {
  @ApiProperty({ example: [1, 2, 3] })
  @ArrayNotEmpty()
  @IsArray()
  @IsInt({ each: true })
  receivers!: User['id'][];

  @ApiProperty({ example: 'uuid' })
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  chatgroup?: ChatGroup['id'];

  @ApiProperty({ example: 'lorem ipsum...' })
  @IsNotEmpty()
  text!: string;
}
