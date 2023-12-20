import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { UsersService } from '../users/users.service';
import { CreateNotificationDto, SystemNotificationDataDto } from './dto/create-notification.dto';
import { NotificationTypesEnum } from './types/notification.type';
import { EntityCondition } from '../../utils/types/entity-condition.type';
import { NullableType } from '../../utils/types/nullable.type';
import { FilterNotificationDto, SortNotificationDto } from './dto/query-notification.dto';
import { IPaginationOptions } from '../../utils/types/pagination-options';
import { JwtPayloadType } from '../auth/base/strategies/types/jwt-payload.type';
import { ReadNotificationsDto } from './dto/read-notifications.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly usersService: UsersService
  ) {}

  public async readNotification(dto: ReadNotificationsDto, userJwtPayload: JwtPayloadType) {
    const notificationIds = dto.notification_ids;

    for (let id of notificationIds) {
      const notification = await this.findOne({ id: Number(id) });

      if (!notification) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            errors: {
              notification: `notification with id: ${id} was not found`,
            },
          },
          HttpStatus.NOT_FOUND
        );
      }

      if (notification.receiver.id !== userJwtPayload.id) {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            errors: {
              notification: `current user can't update this notification. administrator was notified about this action.`,
            },
          },
          HttpStatus.UNAUTHORIZED
        );
      }

      notification.read = true;
      await this.notificationRepository.save(notification);
    }
  }

  public async deleteNotification(id: number, userJwtPayload: JwtPayloadType) {
    const notification = await this.findOne({ id: id });

    if (!notification) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            notification: `notification with id: ${id} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    if (notification.receiver.id !== userJwtPayload.id) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          errors: {
            notification: `current user can't delete this notification. administrator was notified about this action.`,
          },
        },
        HttpStatus.UNAUTHORIZED
      );
    }

    await this.notificationRepository.remove(notification);
  }

  public async findOne(fields: EntityCondition<Notification>): Promise<NullableType<Notification>> {
    return this.notificationRepository.findOne({
      where: fields,
    });
  }

  async findManyWithPagination({
    userJwtPayload,
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    userJwtPayload: JwtPayloadType;
    filterOptions: FilterNotificationDto;
    sortOptions?: SortNotificationDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<Notification[]> {
    const where: FindOptionsWhere<Notification> = {};

    where.receiver = { id: userJwtPayload.id };

    if (filterOptions?.type) {
      switch (filterOptions.type) {
        case NotificationTypesEnum.system:
          where.type = NotificationTypesEnum.system;
          break;
        case NotificationTypesEnum.team_invitation:
          where.type = NotificationTypesEnum.team_invitation;
          break;
        default:
          // Handle the default case or leave it empty if not needed
          break;
      }
    }

    if (filterOptions?.read) {
      where.read = filterOptions.read.toLowerCase() == 'true';
    }

    return this.notificationRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      where: where,
      order: sortOptions?.reduce(
        (accumulator, sort) => ({
          ...accumulator,
          [sort.orderBy]: sort.order,
        }),
        {}
      ),
    });
  }

  async createNotification(dto: CreateNotificationDto) {
    const user = await this.usersService.findOne({ id: dto.receiver });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${dto.receiver} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    const data = this.getDataByType(dto);

    await this.notificationRepository.save(
      this.notificationRepository.create({
        receiver: user,
        type: NotificationTypesEnum[dto.type],
        data: data,
      })
    );
  }

  private getDataByType(dto: CreateNotificationDto) {
    switch (dto.type) {
      case 'system':
        const data = dto.data as SystemNotificationDataDto;
        return {
          system_message: data.system_message,
        };
      // Add more cases here as needed
      default:
        // Handle the default case or leave it empty if not needed
        break;
    }
  }
}
