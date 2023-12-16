import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { CreateNotificationDto, SystemNotificationDataDto } from './dto/create-notification.dto';
import { NotificationTypesEnum } from './types/notification.type';
import { EntityCondition } from '../../utils/types/entity-condition.type';
import { NullableType } from '../../utils/types/nullable.type';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly usersService: UsersService
  ) {}

  public async readNotification(id: number) {
    const notification = await this.findOne({ id: id });

    if (notification) {
      notification.read = !notification.read;
      await this.notificationRepository.save(notification);
    }
  }

  // see user service and how it's done there
  public async deleteNotification(id: number) {
    const notification = await this.findOne({ id: id });

    if (notification) {
      await this.notificationRepository.remove(notification);
    }
  }

  // NB: this is ideal example of how it should be used
  public async findOne(fields: EntityCondition<Notification>): Promise<NullableType<Notification>> {
    return this.notificationRepository.findOne({
      where: fields,
    });
  }

  async findByFromUser(userId: number) {
    return await this.notificationRepository
      .createQueryBuilder('notification')
      .leftJoinAndSelect('notification.receiver', 'receiver')
      .where("notification.data -> 'fromUser' -> 'id' = :userId", {
        userId: userId,
      })
      .getMany();
  }

  async findByReceiver(receiverId: number) {
    return await this.notificationRepository.find({
      where: { receiver: { id: receiverId } },
    });
  }

  // improve code here
  async createNotification(dto: CreateNotificationDto) {
    const receiver = await this.checkAndGetReceiver(dto.receiver);
    const data = await this.getDataByType(dto);
    await this.notificationRepository.save(
      this.notificationRepository.create({
        receiver: receiver,
        type: NotificationTypesEnum[dto.type],
        data: data,
      })
    );
  }

  private async getDataByType(dto: CreateNotificationDto) {
    //TODO: rewrite for switch  to add more cases
    if (dto.type == 'system') {
      const data = dto.data as SystemNotificationDataDto;
      return {
        system_message: data.system_message,
      };
    }
  }

  // improve code here, doesn;t have to error out
  private async checkAndGetReceiver(receiver: string): Promise<User> {
    const user = await this.usersService.findOne({ username: receiver });
    if (!user) {
      throw new BadRequestException('Receiver not exist');
    } else {
      return user;
    }
  }
}
