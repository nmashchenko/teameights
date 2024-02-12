import { WebSocketGateway, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Notification } from './entities/notification.entity';
import { InsertEvent } from 'typeorm';
import { Logger, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { inspect } from 'util';
import { AuthSocket, WebSocketJwtAuthMiddleware } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import { NotificationSocketEvents } from './types/notification.type';
import { WebsocketAllExceptionsFilter } from 'src/utils/websocket-exceprion-filter';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';

@UseFilters(WebsocketAllExceptionsFilter)
@UsePipes(new ValidationPipe({ transform: true }))
@WebSocketGateway({
  namespace: 'notifications',
  transports: ['websocket', 'polling'],
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway implements NestGateway {
  constructor(
    private readonly userService: UsersService,
    private readonly webSocketJwtAuthMiddleware: WebSocketJwtAuthMiddleware
  ) {}

  @WebSocketServer()
  server: Server;

  clients: AuthSocket[] = [];

  afterInit(server: Server) {
    server.use(this.webSocketJwtAuthMiddleware.apply);
    Logger.log(`${NotificationsGateway.name} initialized`, InstanceLoader.name);
  }

  handleConnection(@ConnectedSocket() client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, NotificationsGateway.name);
    this.clients.push(client);
  }

  handleDisconnect(@ConnectedSocket() client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} disconnected`, NotificationsGateway.name);
    this.clients = this.clients.filter(c => c.id != client.id);
  }

  sendMessage(@ConnectedSocket() event: InsertEvent<Notification>) {
    const client = this.clients.find(
      ({ handshake: { user } }) => event.entity.receiver?.id == user.id
    );
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
