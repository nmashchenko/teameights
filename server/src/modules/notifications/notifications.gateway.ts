import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Notification } from './entities/notification.entity';
import { InsertEvent } from 'typeorm';
import { Logger } from '@nestjs/common';
import { inspect } from 'util';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/libs/database/metadata/roles/roles.decorator';
import { RoleEnum } from 'src/libs/database/metadata/roles/roles.enum';
import { AuthSocket, WSAuthMiddleware } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AllConfigType, AuthConfig } from 'src/config/config.type';
import { ConfigService } from '@nestjs/config';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';

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

  afterInit(server: Server) {
    server.use(WSAuthMiddleware(this.jwtService, this.userService, this.configService));
    Logger.log(`${NotificationsGateway.name} initialized`, InstanceLoader.name);
  }

  handleConnection(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, NotificationsGateway.name);
    //console.log(inspect(client.handshake));

    // TODO: add authorization checks (jwt)
  }

  handleDisconnect(client: Socket) {
    Logger.log(`client ${inspect(client.id)} disconnected`, NotificationsGateway.name);
    // TODO: Handle disconnection event
  }

  sendMessage(event: InsertEvent<Notification>) {
    const userId = event?.entity?.receiver.id;

    if (userId) {
      this.server.emit(`notification-${userId}`, event.entity);
    }
  }
}
