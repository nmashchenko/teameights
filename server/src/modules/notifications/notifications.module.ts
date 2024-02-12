import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationSubscriber } from './subscribers/notification.subscriber';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { WebSocketJwtAuthMiddleware } from '../auth/base/auth.socket';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, User])],
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    UsersService,
    NotificationsGateway,
    NotificationSubscriber,
    JwtService,
    ConfigService,
    WebSocketJwtAuthMiddleware,
  ],
  exports: [NotificationsService],
})
export class NotificationsModule {}
