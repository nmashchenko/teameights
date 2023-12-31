import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/libs/database/metadata/roles/roles.enum';
import { StatusEnum } from 'src/libs/database/metadata/statuses/statuses.enum';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { experienceValues } from '../../../../utils/types/experiences.type';
import {
  designerValues,
  developerValues,
  projectManagerValues,
} from '../../../../utils/types/focuses.type';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  private shuffleArray = <T>(array: T[]): T[] => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  private getRandomItemFromArray = (array: string[]): string => {
    const randomIndex = faker.number.int({ min: 0, max: array.length - 1 });
    return array[randomIndex];
  };

  private getRandomBadgeText = (
    min: number,
    max: number,
    type: 'dev' | 'designer' | 'pm' = 'dev'
  ) => {
    let data;

    const methodologies = [
      'Agile',
      'CPM',
      'Kanban',
      'Lean',
      'PRINCE2',
      'PRISM',
      'PMBOK',
      'Scrum',
      'Six Sigma',
      'Waterfall',
    ];
    const fields = [
      '3D',
      'Graphic',
      'Motion',
      'SMM',
      'UX',
      'Game',
      'Illustration',
      'Product',
      'UI',
      'Web',
    ];

    const frameworks = [
      'Node.js',
      'Ruby',
      'Angular',
      'Hadoop',
      'Hive',
      'Snowflake',
      'Ember',
      'Kafka',
      'Django',
      'Docker',
      'Redux',
      'Spring',
      'Spark',
      'Backbone',
      'jQuery',
      'MUI',
      'ASP.NET',
      'NumPy',
      'Flutter',
      'React N.',
      'Flask',
      'Bootstrap',
      'GraphQL',
      'Laravel',
      'PyTorch',
      'Express',
      'Android',
      'AWS',
      'Cypress',
      'Electron',
      'Embedded C',
      'Ionic',
      'IOS',
      'Keras',
      'Kotlin M.',
      'Kubernetes',
      'MXNet',
      'Next.js',
      'Playwright',
      'Qt',
      'React.js',
      'SaaS',
      'Scrapy',
      'Selenium',
      'Svelte',
      'Tensor F.',
      'Terraform',
      'TestCafe',
      'Vue.js',
      'Xamarin',
      'Wordpress',
    ];

    if (type === 'pm') {
      data = methodologies;
    } else if (type === 'designer') {
      data = fields;
    } else {
      data = frameworks;
    }

    const shuffledIcons = this.shuffleArray<string>(data);

    const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

    return shuffledIcons.slice(0, randomLength);
  };

  private getRandomBadgeIcon = (
    min: number,
    max: number,
    type: 'dev' | 'designer' | 'pm' = 'dev'
  ): string[] => {
    let data;

    const managerTools = [
      'Asana',
      'ClickUp',
      'JIRA',
      'Microsoft Project',
      'Miro',
      'Notion',
      'Slack',
      'Trello',
    ];

    const designerTools = [
      '3ds Max',
      'After Effects',
      'Aseprite',
      'Animate',
      'Blender 3D',
      'Cinema 4D',
      'Figma',
      'Firefly',
      'Framer',
      'Houdini',
      'Illustrator',
      'InDesign',
      'InVision',
      'Lottie',
      'Maya',
      'Midjourney',
      'Modo',
      'Photoshop',
      'Premier Pro',
      'Procreate',
      'Proto Pie',
      'Readymag',
      'Shopify',
      'Sketch',
      'Spline',
      'Substance 3D Designer',
      'Vectary',
      'Webflow',
      'Weblium',
      'XD',
      'ZBrush',
    ];

    const programmingLanguages = [
      'Assembly',
      'Bash',
      'C',
      'C#',
      'C++',
      'CSS',
      'Dart',
      'Go',
      'HTML',
      'Java',
      'JavaScript',
      'Julia',
      'Kotlin',
      'Lua',
      'MATLAB',
      'Perl',
      'PHP',
      'Python',
      'R',
      'Ruby',
      'Rust',
      'Scala',
      'SQL',
      'Swift',
      'TypeScript',
    ];

    if (type === 'pm') {
      data = managerTools;
    } else if (type === 'designer') {
      data = designerTools;
    } else {
      data = programmingLanguages;
    }

    const shuffledIcons = this.shuffleArray<string>(data);

    const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

    return shuffledIcons.slice(0, randomLength);
  };

  getRandomFocus = (type: 'dev' | 'designer' | 'pm' = 'dev') => {
    switch (type) {
      case 'designer':
        return this.getRandomItemFromArray(designerValues);
      case 'dev':
        return this.getRandomItemFromArray(developerValues);
      case 'pm':
        return this.getRandomItemFromArray(projectManagerValues);
    }
  };

  generateMockSkills = (speciality: 'Developer' | 'Designer' | 'Project Manager') => {
    let type: 'dev' | 'designer' | 'pm' = 'dev';

    switch (speciality) {
      case 'Developer':
        type = 'dev';
        break;
      case 'Designer':
        type = 'designer';
        break;
      case 'Project Manager':
        type = 'pm';
    }

    const randomBadgeIcons = this.getRandomBadgeIcon(1, 5, type);
    const randomBadgeTexts = this.getRandomBadgeText(1, 6, type);
    const randomFocus = this.getRandomFocus(type);

    return {
      speciality: speciality,
      focus: randomFocus,
      coreTools: randomBadgeIcons,
      additionalTools: randomBadgeTexts,
    };
  };

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
            speciality: 'Developer',
            focus: 'Backend Developer',
            coreTools: ['C++', 'TS'],
          },
        })
      );
    }

    // await this.repository.save(
    //   this.repository.create({
    //     fullName: 'John Deer',
    //     email: 'john.doe@example.com',
    //     password: 'secret',
    //     role: {
    //       id: RoleEnum.user,
    //       name: 'Admin',
    //     },
    //     status: {
    //       id: StatusEnum.active,
    //       name: 'Active',
    //     },
    //   })
    // );

    const countUser = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.user,
        },
      },
    });

    if (!countUser) {
      for (let i = 0; i < 50; i++) {
        const randomSpeciality = this.getRandomItemFromArray([
          'Developer',
          'Designer',
          'Project Manager',
        ]) as 'Developer' | 'Designer' | 'Project Manager';

        await this.repository.save(
          this.repository.create({
            username: faker.internet.userName(),
            fullName: faker.person.firstName(),
            role: {
              id: RoleEnum.user,
            },
            status: {
              id: StatusEnum.active,
              name: 'Active',
            },
            isLeader: faker.datatype.boolean(),
            country: faker.location.country(),
            dateOfBirth: faker.date.birthdate({ min: 18, max: 70, mode: 'age' }),
            description: faker.datatype.boolean()
              ? faker.lorem.sentence({ min: 10, max: 50 })
              : null,
            experience: this.getRandomItemFromArray(experienceValues),
            skills: this.generateMockSkills(randomSpeciality),
          })
        );
      }
    }
  }
}
