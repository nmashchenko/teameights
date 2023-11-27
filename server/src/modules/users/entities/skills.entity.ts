import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {EntityHelper} from "../../../utils/entity-helper";

@Entity()
export class Skills extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  // Designer, Project Manager
  @Column('text', { array: true, nullable: true })
  tools?: string[] | null;

  // Designer
  @Column('text', { array: true, nullable: true })
  fields?: string[] | null;

  // Developer
  @Column('text', { array: true, nullable: true })
  programmingLanguages?: string[] | null;

  // Developer, Project Manager
  @Column('text', { array: true, nullable: true })
  frameworks?: string[] | null;
}
