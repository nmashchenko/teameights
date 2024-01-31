import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  AfterInsert,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Chat } from './chat.user.entity';
import { ChatGroup } from './chat.group.entity';
import { MessageReaction, MessageReader } from '../interfaces/chat.interface';
import { inspect } from 'util';

@Entity({ name: 'message' })
export class Message extends EntityHelper {
  @ApiProperty({ example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Chat, chat => chat.transmitMessages, {
    eager: true,
  })
  sender: User;

  @ManyToMany(() => Chat, chat => chat.receivedMessages)
  receivers: User[];

  @ManyToOne(() => ChatGroup, group => group.threadMessages)
  chatGroup?: ChatGroup;

  @ApiProperty({ example: { 1: 'true' } })
  @Column({ type: 'jsonb' })
  read: { [key: number]: boolean };

  @BeforeInsert()
  setReaders() {
    if (!this.read) this.read = {};
    this.receivers.forEach(receiver => {
      this.read![receiver.id] = false;
    });
  }

  @Column()
  text: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;

  @ApiProperty({ example: { '👍': [1] } })
  @Column({ type: 'jsonb', default: {} })
  reactions?: { [key: string]: number[] };
}
