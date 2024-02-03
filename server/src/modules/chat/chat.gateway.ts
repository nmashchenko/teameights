import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { InsertEvent } from 'typeorm';
import { Message } from './entities/message.entity';
import { Logger } from '@nestjs/common';
import { inspect } from 'util';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AllConfigType } from 'src/config/config.type';
import { WSAuthMiddleware, AuthSocket } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';

@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly configService: ConfigService<AllConfigType>
  ) {}

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    const middleware = WSAuthMiddleware(this.jwtService, this.userService, this.configService);
    server.use(middleware);
    Logger.log(`${ChatGateway.name} initialized`, InstanceLoader.name);
  }

  handleConnection(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, ChatGateway.name);
    //console.log(inspect(client.handshake));

    // TODO: add authorization checks (jwt)
  }

  handleDisconnect(client: Socket) {
    Logger.log(`client ${inspect(client.id)} disconnected`, ChatGateway.name);
    // TODO: Handle disconnection event
  }

  sendMessage(event: InsertEvent<Message>, client: AuthSocket) {
    console.log(client);
    this.server.emit(`message`, inspect(event.entity));
    //if (userId) {
    //  this.server.emit(`message-${userId}`, event.entity);
    //}
  }
}
