import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { ChatGroupService } from './chatgroup/chat.group.service';
import { ChatGroup } from './entities/chat.group.entity';
import { Chat } from './entities/chat.user.entity';
import { Message } from './entities/message.entity';
import { MessageService } from './message/message.service';
import { MessageSubscriber } from './message/message.subscriber';

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
  exports: [MessageService, ChatGroupService],
})
export class ChatModule {}
