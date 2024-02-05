import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayloadType } from 'src/modules/auth/base/strategies/types/jwt-payload.type';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { Repository, FindOptionsWhere, In, ILike } from 'typeorm';
import { ChatGroupService } from '../chatgroup/chat.group.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { PatchMessagesDto } from '../dto/patch-message.dto';
import { FilterMessageDto, SortMessageDto } from '../dto/query-message.dto';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly usersService: UsersService,
    private readonly chatGroupService: ChatGroupService
  ) {}

  public async findOne(fields: EntityCondition<Message>): Promise<NullableType<Message>> {
    return this.messageRepository.findOne({
      where: fields,
    });
  }

  async findManyWithPagination({
    userId,
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    userId: User['id'];
    filterOptions: FilterMessageDto;
    sortOptions?: SortMessageDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<Message[]> {
    const where: FindOptionsWhere<Message>[] = [];

    if (filterOptions?.receivers)
      where.push({
        sender: { id: userId },
        receivers: { id: In(filterOptions.receivers) },
      });
    else where.push({ sender: { id: userId } }, { receivers: { id: userId } });

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

  async softDelete(fields: EntityCondition<Message>): Promise<void> {
    await this.messageRepository.softDelete(fields);
  }

  async createMessage(senderId: number, dto: CreateMessageDto) {
    if (dto.receivers.includes(senderId))
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            receivers: `you can't send message to yourself`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );

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
            receivers: `receivers with id: ${dto.receivers} was not found`,
          },
        },
        HttpStatus.NOT_FOUND
      );

    //let group = false;
    //if (dto.group) group = await this.chatGroupService.findOne({ id: dto.group });
    await this.messageRepository.save(
      this.messageRepository.create({
        sender: sender!,
        receivers: receivers,
        text: dto.text,
      })
    );
  }

  public async patchMessage(messageId: Message['id'], dto: PatchMessagesDto, senderId: User['id']) {
    const exception = message =>
      new HttpException(
        { status: HttpStatus.NOT_FOUND, errors: { message } },
        HttpStatus.UNAUTHORIZED
      );
    const message = await this.messageRepository.findOne({
      where: { id: String(messageId) },
      relations: ['receivers'],
    });

    if (!message) throw exception(`message with id: ${messageId} was not found`);

    const viewersIdList: User['id'][] = [];
    viewersIdList.push(...message.receivers.map(receiver => receiver.id), message.sender.id);
    if (message.chatGroup) {
      const group = await this.chatGroupService.findOne({ id: message.chatGroup.id });
      viewersIdList.push(...group!.members.map(member => member.id), group!.owner.id);
    }

    if (
      (dto.reactions && !viewersIdList.includes(senderId)) ||
      (dto.text && message.sender.id !== senderId)
    )
      throw exception(
        `current user can't update message with id: ${messageId} via current patch fields`
      );
    for (const dtoKey in dto) {
      if (dto[dtoKey] !== undefined) {
        switch (dtoKey) {
          case 'read':
            if (message.sender.id !== senderId) message.read[senderId] = dto.read!;
            break;
          case 'reactions':
            dto.reactions?.forEach(dtoReaction => {
              if (message.reactions![dtoReaction]) {
                if (!message.reactions![dtoReaction].includes(senderId))
                  message.reactions![dtoReaction].push(senderId);
                else {
                  message.reactions![dtoReaction].splice(
                    message.reactions![dtoReaction].indexOf(senderId)
                  );
                }
              } else message.reactions![dtoReaction] = [senderId];
            });
            for (const messageReaction in message.reactions) {
              if (!message.reactions[messageReaction].length) {
                delete message.reactions[messageReaction];
              }
            }
            break;
          default: {
            message[dtoKey] = dto[dtoKey];
          }
        }
      }
    }
    await message.save();
  }
}
