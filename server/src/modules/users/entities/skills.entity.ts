import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from '../../../utils/entity-helper';

@Entity()
export class Skills extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { array: true, nullable: true })
  designerTools?: string[] | null;

  @Column('text', { array: true, nullable: true })
  projectManagerTools?: string[] | null;

  // Designer
  @Column('text', { array: true, nullable: true })
  fields?: string[] | null;

  // Developer
  @Column('text', { array: true, nullable: true })
  programmingLanguages?: string[] | null;

  // Developer
  @Column('text', { array: true, nullable: true })
  frameworks?: string[] | null;

  // Project Manager
  @Column('text', { array: true, nullable: true })
  methodologies?: string[] | null;
}
