import { EntityHelper } from 'src/utils/entity-helper';
import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { ChatGroup } from './chat.group.entity';
import { Message } from './message.entity';

@Entity({ name: 'chat_user' })
export class Chat extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  //ChatGroups
  //@Exclude({ toPlainOnly: true })
  @OneToMany(() => ChatGroup, group => group.owner)
  ownedGroups: ChatGroup[];

  //@Exclude({ toPlainOnly: true })
  @ManyToMany(() => ChatGroup, group => group.members)
  memberGroups: ChatGroup[];

  //Messages
  //@Exclude({ toPlainOnly: true })
  @OneToMany(() => Message, message => message.sender)
  transmitMessages?: Message[];

  //@Exclude({ toPlainOnly: true })
  @ManyToMany(() => Message, message => message.receivers)
  @JoinTable()
  receivedMessages: Message[];
}
