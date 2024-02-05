import { UseFilters, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import { JwtService } from '@nestjs/jwt';
import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AllConfigType } from 'src/config/config.type';
import { WebsocketExceptionsFilter } from 'src/utils/websocket-exceprion-filter';
import { InsertEvent } from 'typeorm';
import { inspect } from 'util';
import { AuthSocket, WSAuthMiddleware } from '../auth/base/auth.socket';
import { UsersService } from '../users/users.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { ChatSocketEvents } from './enums/chat.group.enum';
import { MessageService } from './message/message.service';

@UseFilters(WebsocketExceptionsFilter)
@UsePipes(new ValidationPipe({ transform: true }))
@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
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

  async handleConnection(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, ChatGateway.name);
    this.clients.push(client);
    const messages = await this.messageService.findManyWithPagination({
      filterOptions: {},
      userId: client.user.id,
      paginationOptions: { page: 1, limit: 50 },
      sortOptions: [{ orderBy: 'createdAt', order: 'DESC' }],
    });
    client.emit(ChatSocketEvents.GET_MESSAGES, JSON.stringify(messages));
  }

  handleDisconnect(client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} disconnected`, ChatGateway.name);
    this.clients = this.clients.filter(c => c.id != client.id);
  }

  sendMessage(event: InsertEvent<Message>) {
    const clients: AuthSocket[] = this.clients.filter(
      ({ user }) => event.entity.receivers.includes(user) || event.entity.sender.id == user.id
    );
    clients.forEach(client =>
      client.emit(ChatSocketEvents.GET_MESSAGES, JSON.stringify(event.entity))
    );
    Logger.log(
      `\n{\nEvent: ${ChatSocketEvents.GET_MESSAGES}\nClients: ${inspect(
        clients.map(client => client.id)
      )}\nEntity: ${Message.name} ${inspect(event.entity.id)}\n}`,
      ChatGateway.name
    );
  }

  @SubscribeMessage(ChatSocketEvents.SEND_MESSAGE)
  async handleSendMessage(
    @MessageBody() dto: CreateMessageDto,
    @ConnectedSocket() client: AuthSocket
  ): Promise<void> {
    await this.messageService.createMessage(client.user.id, dto);
    Logger.log(
      `\n{\nEvent: ${ChatSocketEvents.SEND_MESSAGE}\nClients: ${inspect(client.id)}\nEntity: ${
        Message.name
      } ${inspect(dto)}\n}`,
      ChatGateway.name
    );
  }
}
