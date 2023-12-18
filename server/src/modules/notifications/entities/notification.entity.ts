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
import { NotificationTypeData, NotificationTypesEnum } from '../types/notification.type';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.notifications, {
    eager: true,
  })
  receiver: User;

  @Column({ type: Boolean, default: false })
  read: boolean;

  @Column({ type: 'enum', enum: NotificationTypesEnum })
  type: NotificationTypesEnum;

  @Column({ type: 'jsonb' })
  data: NotificationTypeData;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
