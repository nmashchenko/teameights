import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friendship } from 'src/modules/friendship/entities/friendship.entity';
import { FriendshipSeedService } from './friendship-seed.service';
import { User } from 'src/modules/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Friendship, User])],
  providers: [FriendshipSeedService],
  exports: [FriendshipSeedService],
})
export class FriendshipSeedModule {}
