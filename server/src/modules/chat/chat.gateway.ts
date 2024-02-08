import { UseFilters, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { InstanceLoader } from '@nestjs/core/injector/instance-loader';
import {
  WebSocketGateway,
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
import { ChatGroupRoles, ChatSocketEvents } from './enums/chat.enum';
import { MessageService } from './message/message.service';
import { WebsocketAllExceptionsFilter } from 'src/utils/websocket-exceprion-filter';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { ChatGroup } from './entities/chat.group.entity';
import { ChatGroupService } from './chatgroup/chat.group.service';
import { title } from 'process';
import { ChatGroupRoomClient } from './interfaces/chat.interface';

@UsePipes(new ValidationPipe({ transform: true }))
@UseFilters(WebsocketAllExceptionsFilter)
@WebSocketGateway({
  namespace: 'chat',
  transports: ['websocket'],
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements NestGateway {
  constructor(
    private readonly messageService: MessageService,
    private readonly chatGroupService: ChatGroupService,
    private readonly webSocketJwtAuthMiddleware: WebSocketJwtAuthMiddleware
  ) {}

  private logger: Logger = new Logger(ChatGateway.name);

  @WebSocketServer()
  server: Server;

  clients: AuthSocket[] = [];
  chatGroupRooms: {
    id: ChatGroup['id'];
    chatgroup: ChatGroup;
    activeClients: AuthSocket[];
  }[] = [];

  private readonly logGatewayActivityInfo = () => {
    const infoLog = `
    Active Clients: ${inspect(
      this.clients.map(client => ({ id: client.id, rooms: client.rooms }))
    )}\n
    Active Rooms: ${inspect(
      this.chatGroupRooms.map(room => ({
        id: room.id,
        chatgroup: room.chatgroup.title,
        activeClients: room.activeClients,
      }))
    )}
   `;
    this.server.emit(ChatSocketEvents.DEBUG_CHAT, infoLog);
  };

  afterInit(server: Server) {
    this.clients = [];
    server.use(this.webSocketJwtAuthMiddleware.apply);
    this.logger.log(
      `${ChatGateway.name} initialized, server: ${server.engine}`,
      InstanceLoader.name
    );
  }

  async handleConnection(@ConnectedSocket() client: AuthSocket) {
    this.logger.log(`client ${inspect(client.id)} connected`, ChatGateway.name);
    this.clients.push(client);
    const messages = await this.messageService.findManyWithPagination({
      filterOptions: {},
      userId: client.handshake.user.id,
      paginationOptions: { page: 1, limit: 50 },
      sortOptions: [{ orderBy: 'createdAt', order: 'DESC' }],
    });
    client.emit(ChatSocketEvents.GET_MESSAGES, JSON.stringify(messages));

    //ChatGroup rooms
    const {
      handshake: { user },
    } = client;
    const userChatGroups: ChatGroup[] = await this.chatGroupService.findMany([
      { owner: { id: user.id } },
      { members: { id: user.id } },
    ]);
    for (const chatgroup of userChatGroups) {
      let chatgrouproom = this.chatGroupRooms.find(cgr => cgr.chatgroup.id == chatgroup.id);
      if (!chatgrouproom) {
        chatgrouproom = {
          id: chatgroup.id,
          chatgroup: chatgroup,
          activeClients: [],
        };
        this.chatGroupRooms.push(chatgrouproom);
      }
      await client.join(chatgrouproom.id);
      if (!chatgrouproom.activeClients.includes(client)) chatgrouproom.activeClients.push(client);
    }

    this.logGatewayActivityInfo();
  }

  handleDisconnect(@ConnectedSocket() client: AuthSocket) {
    this.logger.log(`client ${inspect(client.id)} disconnected`, ChatGateway.name);
    this.clients = this.clients.filter(c => c.id != client.id);
    const chatgrouprooms = this.chatGroupRooms.filter(cgr => cgr.activeClients.includes(client));
    for (const chatgrouproom of chatgrouprooms) {
      chatgrouproom.activeClients.splice(chatgrouproom.activeClients.indexOf(client), 1);
      if (!chatgrouproom.activeClients.length)
        this.chatGroupRooms.splice(this.chatGroupRooms.indexOf(chatgrouproom));
    }

    this.logGatewayActivityInfo();
  }

  sendMessage(event: InsertEvent<Message>) {
    const {
      entity: { chatGroup },
    } = event;

    if (chatGroup) {
      if (!this.chatGroupRooms.some(chatgrouproom => chatgrouproom.chatgroup.id == chatGroup.id))
        return;
      this.server
        .to(chatGroup.id)
        .emit(
          ChatSocketEvents.GET_MESSAGES,
          JSON.stringify({ ...event.entity, room: chatGroup.id })
        );
      return;
    }

    const receiverClients: AuthSocket[] = this.clients.filter(
      ({ handshake: { user } }) =>
        event.entity.receivers.includes(user) || event.entity.sender.id == user.id
    );

    for (const client of receiverClients) {
      client.emit(ChatSocketEvents.GET_MESSAGES, JSON.stringify(event.entity));
    }
  }

  @SubscribeMessage(ChatSocketEvents.SEND_MESSAGE)
  async handleSendMessage(
    @MessageBody() dto: CreateMessageDto,
    @ConnectedSocket() client: AuthSocket
  ) {
    await this.messageService.createMessage(client.handshake.user.id, dto);
  }
}
