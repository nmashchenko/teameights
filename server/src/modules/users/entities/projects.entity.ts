import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { EntityHelper } from '../../../utils/entity-helper';
@Entity()
export class Projects extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: false })
  title: string;

  @Column({ type: String, nullable: false })
  link: string;

  @ManyToOne(() => User, user => user.projects)
  user: User;
}
