import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Chat as ChatUser } from './chat.user.entity';
import { ChatGroupRole, ChatGroupRolesDefault } from '../interfaces/chat.interface';
import { ChatGroupPermissions, ChatGroupRoles } from '../enums/chat.group.enum';
import { Exclude } from 'class-transformer';
import { Message } from './message.entity';

@Entity({ name: 'chat_group' })
export class ChatGroup extends EntityHelper {
  @ApiProperty({ example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @ManyToOne(() => User, user => user.chat.ownedGroups, { eager: true })
  owner: User;

  @ApiProperty({ example: { rolename: ['permission1', 'permission2'] } })
  @Column({
    type: 'jsonb',
    default: ChatGroupRolesDefault,
  })
  roles: {
    [key: string | ChatGroupRoles]: [ChatGroupPermissions];
  };

  @ApiProperty({ example: { 1: 'specific-rolename' } })
  @Column({ type: 'jsonb', default: {} })
  roleAppointments: {
    [key: User['id']]: ChatGroupRoles | string;
  };

  @ManyToMany(() => User, user => user.chat.memberGroups, { eager: true })
  @JoinTable()
  members: User[];

  @OneToMany(() => Message, message => message.chatGroup)
  threadMessages?: Message[];

  @ApiProperty({ example: { messageId: { referencedAd: '<timestamptz>', referer: 1 } } })
  @Column({ type: 'jsonb', default: {} })
  referencedMessages?: {
    [key: Message['id']]: { referencedAt: Date; referer: User['id'] };
  };

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
