import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { FriendshipStatusTypes } from '../types/friendship.types';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.sentFriendshipRequests, { eager: true })
  creator: User;

  @ManyToOne(() => User, user => user.receivedFriendshipRequests, { eager: true })
  receiver: User;

  @Column({ type: 'enum', default: FriendshipStatusTypes.pending, enum: FriendshipStatusTypes })
  status: FriendshipStatusTypes;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
