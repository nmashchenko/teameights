import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  AfterLoad,
  AfterInsert,
  OneToOne,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';
import appConfig from 'src/config/app.config';
import { AppConfig } from 'src/config/config.type';
import { User } from 'src/modules/users/entities/user.entity';

@Entity({ name: 'message' })
export class Message extends EntityHelper {
  @ApiProperty({ example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @ManyToOne(() => User, user => user.transmitMessages, {
    eager: true,
  })
  sender: User;

  @ManyToMany(() => User, user => user.receivedMessages, { eager: true, })
  receivers: User[];

  @Column({ type: String })
  group?: string;

  @Column({ type: 'jsonb' })
  read: {
    [key: number]: boolean;
  }

  @Column({ type: String, nullable: true })
  text: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  deletedAt: Date;

  @Column({ type: 'jsonb' })
  reactions: {
    [key: number]: string;
  }
}
