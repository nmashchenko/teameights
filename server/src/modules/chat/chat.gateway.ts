import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { InsertEvent } from 'typeorm';
import { Message } from './entities/message.entity';
import { Logger, OnApplicationShutdown } from '@nestjs/common';
import { inspect } from 'util';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AllConfigType } from 'src/config/config.type';
import { WSAuthMiddleware, AuthSocket } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import { ChatSocketEvents } from './enums/chat.group.enum';
import { CreateMessageDto } from './dto/create-message.dto';

@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, OnApplicationShutdown
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

    Logger.log(`${ChatGateway.name} initialized`, InstanceLoader.name);
  }

  onApplicationShutdown() {}

  handleConnection(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, ChatGateway.name);
    this.clients.push(client);
  }

  handleDisconnect(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} disconnected`, ChatGateway.name);
    this.clients = this.clients.filter(c => c != client);
  }

  sendMessage(event: InsertEvent<Message>) {
    this.server.emit(ChatSocketEvents.GET_MESSAGES, inspect(event.entity));
    const clients: AuthSocket[] = this.clients.filter(({ user }) =>
      event.entity.receivers.includes(user)
    );
    console.log(`Clients: ${inspect(clients.map(client => client.id))}`);
    clients.forEach(client =>
      this.server.to(client.id).emit(ChatSocketEvents.GET_MESSAGES, inspect(event.entity))
    );
  }

  @SubscribeMessage(ChatSocketEvents.SEND_MESSAGE)
  handleSendMessage(@MessageBody() data: CreateMessageDto, @ConnectedSocket() client: AuthSocket) {
    //this.server.emit(ChatSocketEvents.GET_MESSAGES, `${inspect(client.user)}\n\n ${inspect(dto)}`);
  }
}
