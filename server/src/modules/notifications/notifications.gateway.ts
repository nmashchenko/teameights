import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Notification } from './entities/notification.entity';
import { InsertEvent } from 'typeorm';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('client', client.id, 'connected');
    // TODO: add authorization checks (jwt)
  }

  handleDisconnect(client: Socket) {
    console.log('client', client.id, 'disconnected');
    // TODO: Handle disconnection event
  }

  sendMessage(event: InsertEvent<Notification>) {
    const userId = event?.entity?.receiver.id;

    if (userId) {
      this.server.emit(`notification-${userId}`, event.entity);
    }
  }
}
