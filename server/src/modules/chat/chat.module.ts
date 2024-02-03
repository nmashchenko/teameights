import { Module } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.user.entity';
import { ChatGroup } from './entities/chat.group.entity';
import { MessageService } from './message.service';
import { UsersService } from '../users/users.service';
import { ChatGroupService } from './chat.group.service';
import { ChatController } from './chat.controller';
import { User } from '../users/entities/user.entity';
import { ChatGateway } from './chat.gateway';
import { MessageSubscriber } from './message.subscriber';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User, Chat, ChatGroup])],
  controllers: [ChatController],
  providers: [
    MessageService,
    UsersService,
    ChatGroupService,
    JwtService,
    ConfigService,
    ChatGateway,
    MessageSubscriber,
  ],
  exports: [MessageService],
})
export class ChatModule {}
