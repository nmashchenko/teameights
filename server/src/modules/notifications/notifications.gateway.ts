import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Notification } from './entities/notification.entity';
import { InsertEvent } from 'typeorm';

@WebSocketGateway()
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    // TODO: add authorization checks (jwt)
  }

  handleDisconnect(client: Socket) {
    // TODO: Handle disconnection event
  }

  sendMessage(event: InsertEvent<Notification>) {
    const userId = event?.entity?.receiver.id;

    if (userId) {
      this.server.emit(`notification-${userId}`, event.entity);
    }
  }
}
