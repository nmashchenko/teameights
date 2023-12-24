import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/libs/database/metadata/roles/roles.enum';
import { StatusEnum } from 'src/libs/database/metadata/statuses/statuses.enum';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { specialityValues } from '../../../../utils/types/specialities.type';
import { experienceValues } from '../../../../utils/types/experiences.type';

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
    type: 'developer' | 'designer' | 'pm' = 'developer'
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
    type: 'developer' | 'designer' | 'pm' = 'developer'
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

  generateMockSkills = (type: 'developer' | 'designer' | 'pm') => {
    const randomBadgeIcons = this.getRandomBadgeIcon(1, 5, type);
    const randomBadgeTexts = this.getRandomBadgeText(1, 6, type);

    switch (type) {
      case 'developer':
        return {
          programmingLanguages: randomBadgeIcons,
          frameworks: randomBadgeTexts,
        };
      case 'designer':
        return {
          designerTools: randomBadgeIcons,
          fields: randomBadgeTexts,
        };
      case 'pm':
        return {
          projectManagerTools: randomBadgeIcons,
          methodologies: randomBadgeTexts,
        };
    }
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

    for (let i = 0; i < 50; i++) {
      const randomSpeciality = this.getRandomItemFromArray(['developer', 'designer', 'pm']) as
        | 'developer'
        | 'designer'
        | 'pm';

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
          speciality: this.getRandomItemFromArray(specialityValues),
          description: faker.datatype.boolean() ? faker.lorem.sentence({ min: 10, max: 50 }) : null,
          experience: this.getRandomItemFromArray(experienceValues),
          skills: this.generateMockSkills(randomSpeciality),
        })
      );
    }
  }
}
