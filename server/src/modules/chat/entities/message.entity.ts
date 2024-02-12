import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  BeforeInsert,
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
import { Exclude } from 'class-transformer';
import { faker } from '@faker-js/faker';

@Entity({ name: 'message' })
export class Message extends EntityHelper {
  @ApiProperty({ example: faker.string.uuid() })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude({ toPlainOnly: true })
  @ManyToOne(() => Chat, chat => chat.transmitMessages, {
    eager: true,
  })
  sender: User;

  @Exclude({ toPlainOnly: true })
  @ManyToMany(() => Chat, chat => chat.receivedMessages)
  receivers: User[];

  @BeforeInsert()
  async setReceivers() {
    if (!this.chatGroup) return;
    await new Promise(() => ({}));
    //TODO fix this via members
    //console.log(inspect(this.chatGroup));
  }

  @ManyToOne(() => ChatGroup, group => group.threadMessages, { eager: true })
  chatGroup?: ChatGroup;

  @ApiProperty({ example: { 1: 'true' } })
  @Column({ type: 'jsonb' })
  read: { [key: number]: boolean };

  @BeforeInsert()
  setReaders() {
    if (!this.read) this.read = {};
    for (const receiver of this.receivers) this.read![receiver.id] = false;
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
