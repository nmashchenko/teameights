import {
  Column,
  AfterLoad,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from 'src/libs/database/metadata/roles/entities/role.entity';
import { Status } from 'src/libs/database/metadata/statuses/entities/status.entity';
import { FileEntity } from 'src/modules/files/entities/file.entity';
import bcrypt from 'bcryptjs';
import { EntityHelper } from 'src/utils/entity-helper';
import { AuthProvidersEnum } from 'src/modules/auth/auth-providers.enum';
import { Exclude, Expose } from 'class-transformer';
import { Universities } from './universities.entity';
import { Jobs } from './jobs.entity';
import { Projects } from './projects.entity';
import { Links } from './links.entity';

@Entity()
export class User extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  // For "string | null" we need to use String type.
  // More info: https://github.com/typeorm/typeorm/issues/2567
  @Column({ type: String, unique: true, nullable: true })
  @Expose({ groups: ['me', 'admin'] })
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ type: String, unique: true, nullable: true })
  username?: string | null;

  @Exclude({ toPlainOnly: true })
  public previousPassword: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (this.previousPassword !== this.password && this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  @Column({ default: AuthProvidersEnum.email })
  @Expose({ groups: ['me', 'admin'] })
  provider: string;

  @Index()
  @Column({ type: String, nullable: true })
  @Expose({ groups: ['me', 'admin'] })
  socialId: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  fullName: string | null;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

  @ManyToOne(() => Role, {
    eager: true,
  })
  role?: Role | null;

  @ManyToOne(() => Status, {
    eager: true,
  })
  status?: Status;

  @Column({ type: String, nullable: true })
  @Index()
  @Exclude({ toPlainOnly: true })
  hash: string | null;

  @Index()
  @Column({ type: Boolean, nullable: true })
  isLeader?: boolean | null;

  @Column({ type: String, nullable: true })
  @Index()
  country?: string | null;

  @Column({ type: 'date', nullable: true })
  dateOfBirth?: Date | null;

  @Column({ type: String, nullable: true })
  concentration?: string | null;

  @Column({ type: String, nullable: true })
  description?: string | null;

  @Column({ type: String, nullable: true })
  experience?: string | null;

  @Column('text', { array: true, nullable: true })
  programmingLanguages?: string[] | null;

  @Column('text', { array: true, nullable: true })
  frameworks?: string[] | null;

  @OneToMany(() => Universities, universities => universities.user, {
    eager: true,
    cascade: true,
  })
  universities?: Universities[];

  @OneToMany(() => Jobs, jobs => jobs.user, {
    eager: true,
    cascade: true,
  })
  jobs?: Jobs[];

  @OneToMany(() => Projects, projects => projects.user, {
    eager: true,
    cascade: true,
  })
  projects?: Projects[];

  @OneToOne(() => Links, { eager: true, cascade: true })
  @JoinColumn()
  links?: Links;

  // @OneToMany(() => Notifications, notifications => notifications.user)
  // notifications: Notifications[];
  //
  // @ManyToOne(() => Team, team => team.users)
  // team: Team;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}