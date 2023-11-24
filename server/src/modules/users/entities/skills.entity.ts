import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Skills {
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
