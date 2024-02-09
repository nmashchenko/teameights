import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Friendship } from './entities/friendship.entity';
import { NotificationsService } from '../notifications/notifications.service';
import { UsersService } from '../users/users.service';
import { EntityCondition } from '../../utils/types/entity-condition.type';
import { NullableType } from '../../utils/types/nullable.type';
import { FriendshipCheckStatusTypes, FriendshipStatusTypes } from './types/friendship.types';
import { UpdateStatusDto } from './dto/update-status.dto';
import {
  FriendRequestNotificationData,
  NotificationStatusEnum,
} from '../notifications/types/notification.type';

import { IPaginationOptions } from '../../utils/types/pagination-options';

import { FilterFriendshipDto, SortFriendshipDto } from './dto/query-friends.dto';

@Injectable()
export class FriendshipService {
  constructor(
    @InjectRepository(Friendship)
    private friendshipRepository: Repository<Friendship>,
    private notificationsService: NotificationsService,
    private usersService: UsersService
  ) {}

  static BAN_TIME_IN_MONTHS = 1;

  public async findOne(fields: EntityCondition<Friendship>): Promise<NullableType<Friendship>> {
    return await this.friendshipRepository.findOne({
      where: fields,
    });
  }

  async createFriendship(creatorId: number, receiverId: number) {
    if (creatorId === receiverId) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: {
            message: 'You can`t add yourself as a friend',
          },
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const creator = await this.usersService.findOne({ id: creatorId });

    if (!creator) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${receiverId} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    const receiver = await this.usersService.findOne({ id: receiverId });

    if (!receiver) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${receiverId} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    await this.checkIfRequestAllowed(creatorId, receiverId);

    //Check if was rejected and then check rejection date
    if (
      await this.friendshipRepository.exist({
        where: {
          creator: { id: creatorId },
          receiver: { id: receiverId },
          status: FriendshipStatusTypes['rejected'],
        },
      })
    ) {
      const friendship = await this.findOne({
        creator: { id: creatorId },
        receiver: { id: receiverId },
        status: FriendshipStatusTypes['rejected'],
      });
      if (friendship) {
        const banEndTime = new Date(friendship.updatedAt);
        banEndTime.setMonth(banEndTime.getMonth() + FriendshipService.BAN_TIME_IN_MONTHS);
        if (new Date() < banEndTime) {
          throw new HttpException(
            {
              status: HttpStatus.CONFLICT,
              errors: {
                friendship: `users with id: ${creatorId} cant send request for user with id: ${receiverId} right now`,
              },
            },
            HttpStatus.CONFLICT
          );
        } else {
          friendship.status = FriendshipStatusTypes.pending;
          await this.notificationsService.createNotification(
            {
              receiver: receiverId,
              type: 'friend_request',
            },
            creatorId
          );
          await this.friendshipRepository.save(friendship);
          return;
        }
      }
    }

    await this.notificationsService.createNotification(
      {
        receiver: receiverId,
        type: 'friend_request',
      },
      creatorId
    );
    await this.friendshipRepository.save(
      this.friendshipRepository.create({
        creator: creator,
        receiver: receiver,
        status: FriendshipStatusTypes.pending,
      })
    );
  }

  private async checkIfRequestAllowed(creatorId: number, receiverId: number) {
    //Check if users already friends
    if (
      (await this.friendshipRepository.exist({
        where: {
          creator: { id: creatorId },
          receiver: { id: receiverId },
          status: FriendshipStatusTypes['accepted'],
        },
      })) ||
      (await this.friendshipRepository.exist({
        where: {
          creator: { id: receiverId },
          receiver: { id: creatorId },
          status: FriendshipStatusTypes['accepted'],
        },
      }))
    ) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          errors: {
            friendship: `users already have friendship`,
          },
        },
        HttpStatus.CONFLICT
      );
    }

    //Check if request already sent
    if (
      await this.friendshipRepository.exist({
        where: {
          creator: { id: creatorId },
          receiver: { id: receiverId },
          status: FriendshipStatusTypes['pending'],
        },
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          errors: {
            friendship: `users with id: ${creatorId} already have sent request for user with id: ${receiverId}`,
          },
        },
        HttpStatus.CONFLICT
      );
    }

    //Check if creator have pending request from receiver
    if (
      await this.friendshipRepository.exist({
        where: {
          creator: { id: receiverId },
          receiver: { id: creatorId },
          status: FriendshipStatusTypes['pending'],
        },
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          errors: {
            friendship: `users with id: ${creatorId} already have pending request from user with id: ${receiverId}`,
          },
        },
        HttpStatus.CONFLICT
      );
    }
  }

  async updateStatus(creatorId: number, receiverId: number, dto: UpdateStatusDto) {
    if (creatorId === receiverId) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: {
            message: 'You can`t have request to yourself',
          },
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const creator = await this.usersService.findOne({ id: creatorId });

    if (!creator) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${receiverId} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    const receiver = await this.usersService.findOne({ id: receiverId });

    if (!receiver) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${receiverId} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    const friendship = await this.findOne({
      creator: { id: creatorId },
      receiver: { id: receiverId },
      status: FriendshipStatusTypes.pending,
    });
    if (!friendship) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            friendship: `user with id: ${receiverId} dont have pending request from user with id: ${creatorId}`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }
    // const notification = await this.notificationsService.findOne({
    //   receiver: { id: receiverId },
    //   data: { status: NotificationStatusEnum.pending, creator: creator.toJSON() },
    // });
    // if (!notification) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.NOT_FOUND,
    //       errors: {
    //         notification: `notification not found`,
    //       },
    //     },
    //     HttpStatus.NOT_FOUND
    //   );
    // }
    // (notification.data as FriendRequestNotificationData).status =
    //   NotificationStatusEnum[dto.status];
    // await this.notificationsService.save(notification);

    friendship.status = FriendshipStatusTypes[dto.status];
    await this.friendshipRepository.save(friendship);
    if (dto.status === 'accepted') {
      await this.notificationsService.createNotification(
        {
          receiver: creatorId,
          type: 'system',
          data: {
            system_message: `${receiver.username} accepted your friend request!`,
          },
        },
        receiverId
      );
    }
  }

  async deleteFriendship(friendId: number, userId: number) {
    if (userId === friendId) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: {
            message: 'You can`t do this operation with yourself',
          },
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const user = await this.usersService.findOne({ id: userId });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${user} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    const friend = await this.usersService.findOne({ id: friendId });

    if (!friend) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${friendId} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    //Friends case
    if (
      (await this.friendshipRepository.exist({
        where: {
          creator: { id: userId },
          receiver: { id: friendId },
          status: FriendshipStatusTypes['accepted'],
        },
      })) ||
      (await this.friendshipRepository.exist({
        where: {
          creator: { id: friendId },
          receiver: { id: userId },
          status: FriendshipStatusTypes['accepted'],
        },
      }))
    ) {
      const friendshipsToDelete = await this.friendshipRepository.find({
        where: [
          {
            creator: { id: userId },
            receiver: { id: friendId },
            status: FriendshipStatusTypes.accepted,
          },
          {
            creator: { id: friendId },
            receiver: { id: userId },
            status: FriendshipStatusTypes.accepted,
          },
        ],
      });

      await this.friendshipRepository.remove(friendshipsToDelete);
      return;
    }
  }

  async rejectRequest(friendId: number, userId: number) {
    if (userId === friendId) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: {
            message: 'You can`t do this operation with yourself',
          },
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const user = await this.usersService.findOne({ id: userId });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${user} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }

    const friend = await this.usersService.findOne({ id: friendId });

    if (!friend) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            user: `user with id: ${friendId} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    }
    if (
      await this.friendshipRepository.exist({
        where: {
          creator: { id: userId },
          receiver: { id: friendId },
          status: FriendshipStatusTypes['pending'],
        },
      })
    ) {
      const friendship = await this.findOne({
        creator: { id: userId },
        receiver: { id: friendId },
        status: FriendshipStatusTypes['pending'],
      });
      if (friendship) {
        friendship.status = FriendshipStatusTypes.rejected;
        await this.friendshipRepository.save(friendship);
        const notification = await this.notificationsService.findOne({
          receiver: { id: friendId },
          data: { status: NotificationStatusEnum.pending, creator: user.toJSON() },
        });
        if (notification) {
          await this.notificationsService.deleteNotification(notification);
        }
      }
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: {
            message: 'You can`t do this operation',
          },
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findManyWithPagination({
    userId,
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    userId: number;
    filterOptions: FilterFriendshipDto;
    sortOptions?: SortFriendshipDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<Friendship[]> {
    const where: FindOptionsWhere<Friendship>[] = [
      { receiver: { id: userId } },
      { creator: { id: userId } }, // Отдельное условие для поиска по creatorId
    ];

    if (filterOptions?.status) {
      switch (filterOptions.status) {
        case FriendshipStatusTypes.accepted:
          where.forEach(condition => (condition.status = FriendshipStatusTypes.accepted));
          break;
        case FriendshipStatusTypes.rejected:
          where.forEach(condition => (condition.status = FriendshipStatusTypes.rejected));
          break;
        case FriendshipStatusTypes.pending:
          where.forEach(condition => (condition.status = FriendshipStatusTypes.pending));
          break;
        default:
          // Handle the default case or leave it empty if not needed
          break;
      }
    }

    return this.friendshipRepository.find({
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

  async getStatus(userId: number, friendId: number) {
    const friendshipFrom = await this.findOne({
      creator: { id: userId },
      receiver: { id: friendId },
    });
    if (friendshipFrom && friendshipFrom.status === FriendshipStatusTypes.accepted) {
      return {
        status: FriendshipCheckStatusTypes.friends,
      };
    } else if (
      friendshipFrom &&
      (friendshipFrom.status === FriendshipStatusTypes.pending ||
        friendshipFrom.status === FriendshipStatusTypes.rejected)
    ) {
      return {
        status: FriendshipCheckStatusTypes.requested,
      };
    }
    const friendshipTo = await this.findOne({
      creator: { id: friendId },
      receiver: { id: userId },
    });
    if (friendshipTo && friendshipTo.status === FriendshipStatusTypes.accepted) {
      return {
        status: FriendshipCheckStatusTypes.friends,
      };
    } else if (friendshipTo && friendshipTo.status === FriendshipStatusTypes.pending) {
      return {
        status: FriendshipCheckStatusTypes.toRespond,
      };
    }

    if (
      (!friendshipTo && !friendshipFrom) ||
      (friendshipTo && friendshipTo.status === FriendshipStatusTypes.rejected)
    ) {
      return {
        status: FriendshipCheckStatusTypes.none,
      };
    }
  }
}
