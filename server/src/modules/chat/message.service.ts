import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { FindOptionsWhere, ILike, In, Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { JwtPayloadType } from '../auth/base/strategies/types/jwt-payload.type';
import { FilterMessageDto, SortMessageDto } from './dto/query-message.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { CreateMessageDto } from './dto/create-message.dto';
import { User } from '../users/entities/user.entity';
import { inspect } from 'util';
import { Exception } from 'handlebars';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly usersService: UsersService
  ) {}

  public async findOne(fields: EntityCondition<Message>): Promise<NullableType<Message>> {
    return this.messageRepository.findOne({
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
    filterOptions: FilterMessageDto;
    sortOptions?: SortMessageDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<Message[]> {
    const where: FindOptionsWhere<Message>[] = [];

    if (filterOptions?.receivers)
      where.push({
        sender: { id: userJwtPayload.id },
        receivers: { username: In(filterOptions.receivers) },
      });
    else
      where.push({ sender: { id: userJwtPayload.id } }, { receivers: { id: userJwtPayload.id } });

    where.forEach(inst => {
      inst.text = filterOptions?.text && ILike(`%${filterOptions.text}%`);
    });

    return this.messageRepository.find({
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

  async createMessage(senderId: number, dto: CreateMessageDto) {
    //type one
    const sender = await this.usersService.findOne({ id: senderId });

    const receivers = await this.usersService.findMany({ id: In(dto.receivers) });
    const missingUsers = dto.receivers.filter(
      receiver => !receivers.some(user => user.id === receiver)
    );
    if (missingUsers.length)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errors: {
            receivers: `users with id: ${dto.receivers} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );
    await this.messageRepository.save(
      this.messageRepository.create({
        sender: sender!,
        receivers: receivers,
        text: dto.text,
        group: dto.group,
      })
    );
  }
}
