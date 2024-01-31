import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { ChatGroup } from './entities/chat.group.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindOptionsWhere, ILike, In, Repository } from 'typeorm';
import { CreateChatGroupDto } from './dto/create-chat-group.dto';
import { User } from '../users/entities/user.entity';
import { FilterChatGroupDto, SortChatGroupDto } from './dto/query-chat-group.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { JwtPayloadType } from '../auth/base/strategies/types/jwt-payload.type';
import { inspect } from 'util';
import { ChatGroupRolesDefault } from './interfaces/chat.interface';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class ChatGroupService {
  constructor(
    @InjectRepository(ChatGroup)
    private readonly chatGroupRepository: Repository<ChatGroup>,
    private readonly usersService: UsersService
  ) {}

  async findManyWithPagination({
    userJwtPayload,
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    userJwtPayload: JwtPayloadType;
    filterOptions: FilterChatGroupDto;
    sortOptions?: SortChatGroupDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<ChatGroup[]> {
    const where: FindOptionsWhere<ChatGroup>[] = [];

    if (filterOptions?.members)
      where.push(
        {
          owner: { id: userJwtPayload.id },
          members: { id: In(filterOptions.members) },
        },
        { members: { id: In([...filterOptions.members, userJwtPayload.id]) } }
      );
    else where.push({ owner: { id: userJwtPayload.id } }, { members: { id: userJwtPayload.id } });

    where.forEach(inst => {
      inst.title = filterOptions?.title && ILike(`%${filterOptions.title}%`);
    });

    return this.chatGroupRepository.find({
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

  async softDelete(id: ChatGroup['id'], ownerId: User['id']): Promise<void> {
    await this.chatGroupRepository.softDelete({ id: id, owner: { id: ownerId } });
  }

  async findOne(fields: EntityCondition<ChatGroup>): Promise<NullableType<ChatGroup>> {
    return this.chatGroupRepository.findOneByOrFail(fields);
  }
  public async createGroup(ownerId: number, dto: CreateChatGroupDto) {
    const owner = await this.usersService.findOne({ id: ownerId });
    let members: User[] = [];
    if (dto.members) {
      members = await this.usersService.findMany({ id: In(dto.members) });
      const missingUsers = dto.members.filter(member => !members.some(user => user.id === member));
      if (missingUsers.length)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            errors: {
              receivers: `members with id: ${dto.members} was not found`,
            },
          },
          HttpStatus.NOT_FOUND
        );
    }
    await this.chatGroupRepository.save(
      this.chatGroupRepository.create({
        title: dto.title,
        description: dto.description,
        owner: owner!,
        members: members,
      })
    );
  }
}
