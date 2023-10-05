import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/libs/database/metadata/roles/roles.enum';
import { StatusEnum } from 'src/libs/database/metadata/statuses/statuses.enum';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async run() {
    const countAdmin = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.admin,
        },
      },
    });

    if (!countAdmin) {
      await this.repository.save(
        this.repository.create({
          fullName: 'Super Admin',
          email: 'admin@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.admin,
            name: 'Admin',
          },
          status: {
            id: StatusEnum.active,
            name: 'Active',
          },
          isLeader: true,
          country: 'Ukraine',
          dateOfBirth: '2023-09-25',
          concentration: 'Frontend/UI Developer',
          description: 'Cool developer!',
          experience: '5+ years',
          programmingLanguages: ['C++', 'C', 'Go'],
          frameworks: ['Ruby', 'NodeJS'],
          universityData: [
            {
              university: 'test',
              degree: 'test',
              major: 'test',
              admissionDate: '2023-10-02',
              graduationDate: '2023-10-03',
            },
          ],
        })
      );
    }

    const countUser = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.user,
        },
      },
    });

    if (!countUser) {
      await this.repository.save(
        this.repository.create({
          fullName: 'John Deer',
          email: 'john.doe@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.user,
            name: 'Admin',
          },
          status: {
            id: StatusEnum.active,
            name: 'Active',
          },
        })
      );
    }
  }
}
