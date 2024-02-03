import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { Message } from './entities/message.entity';
import { ChatGateway } from './chat.gateway';

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

  // TODO: add MQ support: https://docs.nestjs.com/recipes/cqrs (EventPublisher)
  afterInsert(event: InsertEvent<Message>) {
    this.chatGateway.sendMessage(event);
  }
}
