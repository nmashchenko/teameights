import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from '../../../utils/entity-helper';

@Entity()
export class Skills extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  speciality: string;

  @Column({ type: String })
  focus: string;

  @Column('text', { array: true })
  coreTools: string[];

  @Column('text', { array: true, nullable: true })
  additionalTools?: string[] | null;
}
