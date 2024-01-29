import { User } from 'src/modules/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatGroup } from './chat.group.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Message } from './message.entity';

@Entity({ name: 'chat_user' })
export class Chat extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  //ChatGroups
  @Exclude({ toPlainOnly: true })
  @OneToMany(() => ChatGroup, group => group.owner)
  ownedGroups: ChatGroup[];

  @Exclude({ toPlainOnly: true })
  @ManyToMany(() => ChatGroup, group => group.members)
  @JoinTable()
  memberGroups: ChatGroup[];

  //Messages
  @Exclude({ toPlainOnly: true })
  @OneToMany(() => Message, message => message.sender)
  transmitMessages?: Message[];

  @Exclude({ toPlainOnly: true })
  @ManyToMany(() => Message, message => message.receivers)
  @JoinTable()
  receivedMessages: Message[];
}
