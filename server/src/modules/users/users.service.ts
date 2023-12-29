import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { ArrayOverlap, DeepPartial, FindOptionsWhere, In, Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NullableType } from 'src/utils/types/nullable.type';
import { FilterUserDto, SortUserDto } from './dto/query-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  create(createProfileDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(this.usersRepository.create(createProfileDto));
  }

  async findManyWithPagination({
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    filterOptions?: FilterUserDto | null;
    sortOptions?: SortUserDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<User[]> {
    const where: FindOptionsWhere<User> = {};

    if (filterOptions) {
      where.fullName = filterOptions?.fullName && Like(`%${filterOptions.fullName}%`);
      where.username = filterOptions?.username && Like(`%${filterOptions.username}%`);
      where.isLeader = filterOptions?.isLeader && filterOptions.isLeader;

      where.country = filterOptions?.countries && In(filterOptions.countries);
      where.speciality = filterOptions?.specialities && In(filterOptions.specialities);
      where.experience = filterOptions?.experience && Like(`%${filterOptions.experience}%`);

      where.skills = {
        programmingLanguages:
          filterOptions?.programmingLanguages && ArrayOverlap(filterOptions.programmingLanguages),
        frameworks: filterOptions?.frameworks && ArrayOverlap(filterOptions.frameworks),
        designerTools: filterOptions?.designerTools && ArrayOverlap(filterOptions.designerTools),
        projectManagerTools:
          filterOptions?.projectManagerTools && ArrayOverlap(filterOptions.projectManagerTools),
        fields: filterOptions?.fields && ArrayOverlap(filterOptions.fields),
        methodologies: filterOptions?.methodologies && ArrayOverlap(filterOptions.methodologies),
      };
    }

    return this.usersRepository.find({
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

  findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    return this.usersRepository.findOne({
      where: fields,
    });
  }

  update(id: User['id'], payload: DeepPartial<User>): Promise<User> {
    return this.usersRepository.save(
      this.usersRepository.create({
        id,
        ...payload,
      })
    );
  }

  async softDelete(id: User['id']): Promise<void> {
    await this.usersRepository.softDelete(id);
  }

  // async makeFriendship(creator: User, receiver: User) {
  //   if (!creator.friends) {
  //     creator.friends = [];
  //   }
  //   if (!receiver.friends) {
  //     receiver.friends = [];
  //   }
  //
  //   creator.friends.push(receiver);
  //   receiver.friends.push(creator);
  //   await this.usersRepository.save(creator);
  //   await this.usersRepository.save(receiver);
  // }

  // async findFriends(id: number) {
  //   const user = await this.usersRepository.findOne({ where: { id: id }, relations: ['friends'] });
  //   if (!user) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         errors: {
  //           user: `user with id: ${id} was not found`,
  //         },
  //       },
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //   return user.friends;
  // }

  // async deleteFriend(id: number, friendId: number, userJwtPayload: JwtPayloadType) {
  //   if (id !== userJwtPayload.id) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.UNAUTHORIZED,
  //         errors: {
  //           notification: `current user can't do this action. administrator was notified about this action.`,
  //         },
  //       },
  //       HttpStatus.UNAUTHORIZED
  //     );
  //   }
  //   const user = await this.usersRepository.findOne({ where: { id: id }, relations: ['friends'] });
  //   if (!user) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         errors: {
  //           user: `User with id: ${id} was not found`,
  //         },
  //       },
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //
  //   const friend = await this.usersRepository.findOne({
  //     where: { id: friendId },
  //     relations: ['friends'],
  //   });
  //   if (!friend) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         errors: {
  //           user: `User with id: ${friendId} was not found`,
  //         },
  //       },
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  //
  //   const userFriendIndex = user.friends.findIndex(userFriend => userFriend.id === friend.id);
  //   const friendFriendIndex = friend.friends.findIndex(friendFriend => friendFriend.id === user.id);
  //
  //   if (userFriendIndex !== -1) {
  //     user.friends.splice(userFriendIndex, 1);
  //     await this.usersRepository.save(user);
  //   }
  //
  //   if (friendFriendIndex !== -1) {
  //     friend.friends.splice(friendFriendIndex, 1);
  //     await this.usersRepository.save(friend);
  //   }
  // }
}
