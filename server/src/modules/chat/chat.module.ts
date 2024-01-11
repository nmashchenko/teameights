import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { ChatController } from './chat.controller';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User])],
  controllers: [ChatController],
  providers: [MessageService],
  exports: [MessageService],
})
export class ChatModule {}
