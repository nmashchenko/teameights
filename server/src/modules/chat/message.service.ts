import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { JwtPayloadType } from '../auth/base/strategies/types/jwt-payload.type';
import { FilterMessageDto, SortMessageDto } from './dto/query-message.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { CreateMessageDto } from './dto/create-message.dto';
import { User } from '../users/entities/user.entity';

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

    where.push({ sender: { id: userJwtPayload.id } }, { receivers: { id: userJwtPayload.id } });

    where.forEach(inst => {
      if (filterOptions?.text) inst.text = Like(filterOptions.text);
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

  // async createMessage(dto: CreateMessageDto) {
  //   const users = await this.usersService.findManyWithPagination()

  //   if (!user) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         errors: {
  //           user: `user with id: ${dto.receiver} was not found`,
  //         },
  //       },
  //       HttpStatus.NOT_FOUND
  //     );
  //   }
  // }
}
