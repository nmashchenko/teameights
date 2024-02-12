import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { Notification } from '../entities/notification.entity';
import { NotificationsGateway } from '../notifications.gateway';

@EventSubscriber()
export class NotificationSubscriber implements EntitySubscriberInterface<Notification> {
  constructor(
    dataSource: DataSource,
    private readonly notificationsGateway: NotificationsGateway
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Notification;
  }

  // TODO: add MQ support: https://docs.nestjs.com/recipes/cqrs (EventPublisher)
  afterInsert(event: InsertEvent<Notification>) {
    this.notificationsGateway.sendMessage(event);
  }
}
