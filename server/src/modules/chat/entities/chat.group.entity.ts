import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Chat as ChatUser } from './chat.user.entity';
import { ChatGroupRole, ChatGroupRolesDefault } from '../interfaces/chat.interface';
import { ChatGroupPermissions, ChatGroupRoles } from '../enums/chat.group.enum';

@Entity({ name: 'chat_group' })
export class ChatGroup extends EntityHelper {
  @ApiProperty({ example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @ManyToOne(() => ChatUser, user => user.ownedGroups, {
    eager: true,
  })
  owner: ChatUser;

  @ApiProperty({ example: { name: ChatGroupRoles.MEMBER, permissions: [ChatGroupRoles] } })
  @Column({
    type: 'jsonb',
    default: () => ChatGroupRolesDefault,
  })
  roles: ChatGroupRole[];

  @ManyToMany(() => ChatUser, user => user.memberGroups)
  members: ChatUser[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
