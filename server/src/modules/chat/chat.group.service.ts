import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { ChatGroup } from './entities/chat.group.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ChatGroupService {
  constructor(
    @InjectRepository(ChatGroup)
    private readonly chatGroupRepository: Repository<ChatGroup>,
    private readonly usersService: UsersService
  ) {}
  public async createGroup(ownerId: number, dto: CreateMessageDto) {
    await this.chatGroupRepository.save(
      this.chatGroupRepository.create({
        owner: { id: ownerId },
        description: dto.description ?? null,
      })
    );
  }
}
