import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { EntityHelper } from '../../../utils/entity-helper';

@Entity()
export class Jobs extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: false })
  title: string;

  @Column({ type: String, nullable: false })
  company: string;

  @Column({ type: 'date', nullable: false })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date | null;

  @ManyToOne(() => User, user => user.jobs)
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  checkDates() {
    if (this.endDate && this.endDate <= this.startDate) {
      throw new Error('End date must be after the admission date');
    }
  }
}
