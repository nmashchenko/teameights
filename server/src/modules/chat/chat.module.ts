import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { ChatController } from './chat.controller';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Chat } from './entities/chat.user.entity';
import { ChatGroup } from './entities/chat.group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User, Chat, ChatGroup])],
  controllers: [ChatController],
  providers: [MessageService, UsersService],
  exports: [MessageService],
})
export class ChatModule {}
