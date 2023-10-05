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
export class UniversityData extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: false })
  university: string;

  @Column({ type: String, nullable: false })
  degree: string;

  @Column({ type: String, nullable: false })
  major: string;

  @Column({ type: 'date', nullable: false })
  admissionDate: Date;

  @Column({ type: 'date', nullable: true })
  graduationDate?: Date | null;

  @ManyToOne(() => User, user => user.universityData)
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  checkDates() {
    if (this.graduationDate && this.graduationDate <= this.admissionDate) {
      throw new Error('Graduation date must be after the admission date');
    }
  }
}
