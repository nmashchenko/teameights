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
          speciality: 'Frontend Developer',
          description: 'Cool developer!',
          experience: '5+ years',
          universities: [
            {
              university: 'UIC',
              degree: `Bachelor's degree`,
              major: 'Computer Science',
              admissionDate: '2019-10-02',
              graduationDate: '2023-10-03',
            },
          ],
          jobs: [
            {
              title: 'SWE',
              company: 'Spotify',
              startDate: '2016-05-18T14:10:30',
              endDate: '2020-05-18T14:10:30',
            },
          ],
          projects: [
            {
              title: 'Teameights',
              link: 'https://teameights.com',
            },
          ],
          links: {
            github: 'https://github.com',
          },
          skills: {
            programmingLanguages: ['C++', 'TS'],
            frameworks: ['NodeJS'],
          },
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
          skills: {
            tools: ['Figma'],
            frameworks: ['Framework'],
          },
        })
      );
    }
  }
}
