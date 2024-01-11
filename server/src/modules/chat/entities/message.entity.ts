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

@Entity({ name: 'message' })
export class Message extends EntityHelper {
  @ApiProperty({ example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.transmitMessages, {
    eager: true,
  })
  sender: User;

  //@ManyToMany(() => User, user => user.receivedMessages, { eager: true })
  //receivers: User[];

  //@Column({ type: String })
  //group?: string;

  //@ApiProperty({ example: '{"userId":"boolean"}' })
  //@Column({ type: 'jsonb' })
  //read: {
  //  [key: number]: boolean;
  //};

  //@Column({ type: String })
  //text?: string;

  //@CreateDateColumn({ type: 'timestamp' })
  //createdAt: Date;

  //@UpdateDateColumn({ type: 'timestamp' })
  //updatedAt: Date;

  //@DeleteDateColumn({ type: 'timestamp' })
  //deletedAt: Date;

  //@ApiProperty({ example: '{"userId":"/reactionUnicode/"}' })
  //@Column({ type: 'jsonb' })
  //reactions: {
  //  [key: number]: string;
  //};
}
