// FYI: This is draft for now to showcase the planned structure

// @Entity()
// export class JobData {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column()
//   title: string;
//
//   @Column()
//   company: string;
//
//   @Column({ type: 'date' })
//   startDate: Date;
//
//   @Column({ type: 'date', nullable: true })
//   endDate: Date;
//
//   @ManyToOne(() => User, user => user.jobData)
//   user: User;
// }
