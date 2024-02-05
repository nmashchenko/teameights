import { UseFilters, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketServer,
  ConnectedSocket,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { InsertEvent } from 'typeorm';
import { inspect } from 'util';
import { WebSocketJwtAuthMiddleware, AuthSocket } from '../auth/base/auth.socket';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { ChatSocketEvents } from './enums/chat.group.enum';
import { MessageService } from './message/message.service';
import { WebsocketAllExceptionsFilter } from 'src/utils/websocket-exceprion-filter';

@UsePipes(new ValidationPipe({ transform: true }))
@UseFilters(WebsocketAllExceptionsFilter)
@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  constructor(
    private readonly messageService: MessageService,
    private readonly webSocketJwtAuthMiddleware: WebSocketJwtAuthMiddleware
  ) {}

  @WebSocketServer()
  server: Server;

  clients: AuthSocket[] = [];

  afterInit(server: Server) {
    this.clients = [];
    server.use(this.webSocketJwtAuthMiddleware.apply);
    Logger.log(`${ChatGateway.name} initialized, server: ${server.engine}`, InstanceLoader.name);
  }

  async handleConnection(@ConnectedSocket() client: AuthSocket) {
    Logger.log(`client ${inspect(client.id)} connected`, ChatGateway.name);
    this.clients.push(client);
    const messages = await this.messageService.findManyWithPagination({
      filterOptions: {},
      userId: client.handshake.user.id,
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
      ({ handshake: { user } }) =>
        event.entity.receivers.includes(user) || event.entity.sender.id == user.id
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
    await this.messageService.createMessage(client.handshake.user.id, dto);
    Logger.log(
      `\n{\nEvent: ${ChatSocketEvents.SEND_MESSAGE}\nClients: ${inspect(client.id)}\nEntity: ${
        Message.name
      } ${inspect(dto)}\n}`,
      ChatGateway.name
    );
  }
}
