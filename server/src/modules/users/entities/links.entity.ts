import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from '../../../utils/entity-helper';

@Entity()
export class Links extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: true })
  github?: string | null;

  @Column({ type: String, nullable: true })
  linkedIn?: string | null;

  @Column({ type: String, nullable: true })
  behance?: string | null;

  @Column({ type: String, nullable: true })
  telegram?: string | null;
}
