import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { ChatGroupRoles, ChatGroupPermissions } from '../enums/chat.enum';
import { ChatGroupRolesDefault } from '../interfaces/chat.interface';
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

  @ManyToOne(() => User, user => user.chat.ownedGroups)
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

  @ManyToMany(() => User, user => user.chat.memberGroups)
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
