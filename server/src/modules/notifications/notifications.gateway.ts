import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Notification } from './entities/notification.entity';
import { InsertEvent } from 'typeorm';
import { Logger, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { inspect } from 'util';
import { AuthSocket, WSAuthMiddleware } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AllConfigType } from 'src/config/config.type';
import { ConfigService } from '@nestjs/config';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import { NotificationSocketEvents } from './types/notification.type';
import { WebsocketExceptionsFilter } from 'src/utils/websocket-exceprion-filter';

@UseFilters(WebsocketExceptionsFilter)
@UsePipes(new ValidationPipe({ transform: true }))
@WebSocketGateway({
  namespace: 'notifications',
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly configService: ConfigService<AllConfigType>
  ) {}

  @WebSocketServer()
  server: Server;

  clients: AuthSocket[] = [];

  afterInit(server: Server) {
    server.use(WSAuthMiddleware(this.jwtService, this.userService, this.configService));
    Logger.log(`${NotificationsGateway.name} initialized`, InstanceLoader.name);
  }

  handleConnection(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, NotificationsGateway.name);
    this.clients.push(client);
  }

  handleDisconnect(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} disconnected`, NotificationsGateway.name);
    this.clients = this.clients.filter(c => c.id != client.id);
  }

  sendMessage(event: InsertEvent<Notification>) {
    const client = this.clients.find(({ user }) => event.entity.receiver?.id == user.id);
    if (!client) return;
    client.emit(NotificationSocketEvents.GET_NOTIFICATIONS, JSON.stringify(event.entity));
    Logger.log(
      `\n{\nEvent: ${NotificationSocketEvents.GET_NOTIFICATIONS}\nClients: ${inspect(
        client.id
      )}\nEntity: ${Notification.name} ${inspect(event.entity.id)}\n}`,
      NotificationsGateway.name
    );
  }
}
