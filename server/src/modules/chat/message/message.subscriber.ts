import { EventSubscriber, EntitySubscriberInterface, DataSource, InsertEvent } from 'typeorm';
import { ChatGateway } from '../chat.gateway';
import { Message } from '../entities/message.entity';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface<Message> {
  constructor(
    dataSource: DataSource,
    private readonly chatGateway: ChatGateway
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Message;
  }

  afterInsert(event: InsertEvent<Message>) {
    this.chatGateway.sendMessage(event);
  }
}
