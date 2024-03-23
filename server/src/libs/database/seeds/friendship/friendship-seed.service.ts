import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Friendship } from 'src/modules/friendship/entities/friendship.entity';
import { FriendshipStatusTypes } from 'src/modules/friendship/types/friendship.types';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendshipSeedService {
  constructor(
    @InjectRepository(Friendship)
    private repository: Repository<Friendship>,
    @InjectRepository(User)
    private usersService: Repository<User>
  ) {}

  async run() {
    const user1Id = 1;
    const user2Id = 2;
    const creator = await this.usersService.findOne({ where: { id: user1Id } });
    const receiver = await this.usersService.findOne({ where: { id: user2Id } });
    if (!receiver || !creator) return;
    try {
      await this.repository.save(
        this.repository.create({
          creator: creator,
          receiver: receiver,
          status: FriendshipStatusTypes.accepted,
        })
      );
      console.log('Sucessfully saved');
    } catch (error) {
      console.error('Error seeding friendships:', error);
    }
  }
}
