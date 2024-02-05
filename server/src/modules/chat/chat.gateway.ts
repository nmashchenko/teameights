import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WsResponse,
  BaseWsExceptionFilter,
  WsException,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { InsertEvent } from 'typeorm';
import { Message } from './entities/message.entity';
import {
  ArgumentsHost,
  Catch,
  HttpException,
  Logger,
  OnApplicationShutdown,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { inspect } from 'util';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AllConfigType } from 'src/config/config.type';
import { WSAuthMiddleware, AuthSocket } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import { BasicSocketEvents, ChatSocketEvents } from './enums/chat.group.enum';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message/message.service';

@Catch(WsException, HttpException)
export class WebsocketExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: WsException | HttpException, host: ArgumentsHost) {
    const client = host.switchToWs().getClient() as AuthSocket;
    const error = exception instanceof WsException ? exception.getError() : exception.getResponse();
    const details = error instanceof Object ? { ...error } : { message: error };
    const e = JSON.stringify(details);
    console.log(e);
    client.emit(BasicSocketEvents.ERRORS, e);
  }
}

@UseFilters(WebsocketExceptionsFilter)
@UsePipes(new ValidationPipe({ transform: true }))
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
    private readonly configService: ConfigService<AllConfigType>,
    private readonly messageService: MessageService
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
    const clients: AuthSocket[] = this.clients.filter(
      ({ user }) => event.entity.receivers.includes(user) || event.entity.sender.id == user.id
    );
    console.log(`Clients: ${inspect(clients.map(client => client.id))}`);
    clients.forEach(client => {
      this.server.to(client.id).emit(ChatSocketEvents.GET_MESSAGES, inspect(event.entity));
    });
  }

  @SubscribeMessage(ChatSocketEvents.SEND_MESSAGE)
  handleSendMessage(
    @MessageBody() dto: CreateMessageDto,
    @ConnectedSocket() client: AuthSocket
  ): Promise<void> {
    return this.messageService.createMessage(client.user.id, dto);
  }
}
