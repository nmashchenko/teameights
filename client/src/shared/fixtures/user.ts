import { IUserResponse } from '@teameights/types';
import { faker } from '@faker-js/faker';

export const generateRandomUserResponseFixture = (amount: number): IUserResponse[] => {
  const users = [];
  faker.seed(123); // You can use a specific seed for consistent random data
  for (let i = 0; i < amount; i++) {
    const user: IUserResponse = {
      id: faker.number.int(),
      username: faker.internet.userName(),
      fullName: faker.person.fullName(),
      photo: {
        id: faker.number.int(),
        path: `https://picsum.photos/${Math.floor(Math.random() * 1001) + 3000}/${
          Math.floor(Math.random() * 1001) + 3000
        }`,
      },
      role: { id: faker.number.int(), name: 'USER' },
      status: { id: faker.number.int(), name: 'Active' },
      isLeader: faker.datatype.boolean(),
      country: faker.location.country(),
      dateOfBirth: faker.date.past(),
      concentration: faker.lorem.word(),
      description: faker.lorem.sentence(),
      experience: `2 years`,
      programmingLanguages: ['JS', 'C++', 'GO'],
      frameworks: ['NestJS', 'NextJS'],
      universities: [
        {
          id: faker.number.int(),
          name: faker.company.name(),
          degree: faker.lorem.word(),
          major: faker.lorem.word(),
          admissionDate: faker.date.past(),
          graduationDate: faker.date.past(),
        },
      ],
      jobs: [
        {
          id: faker.number.int(),
          title: faker.person.jobTitle(),
          company: faker.company.name(),
          startDate: faker.date.past(),
          endDate: faker.date.past(),
        },
      ],
      projects: [
        {
          id: faker.number.int(),
          title: 'Lanselon loh',
          link: faker.internet.url(),
        },
      ],
      links: {
        id: faker.number.int(),
        github: faker.internet.url(),
        linkedIn: faker.internet.url(),
        behance: null,
        telegram: faker.internet.url(),
      },
      notifications: [],
      team: null,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
      deletedAt: null,
    };
    users.push(user);
  }

  return users;
};

export const userResponseFixture: IUserResponse = {
  id: 1,
  username: 'sample_username',
  fullName: 'John Doe',
  photo: {
    id: faker.number.int(),
    path: `https://picsum.photos/${Math.floor(Math.random() * 1001) + 3000}/${
      Math.floor(Math.random() * 1001) + 3000
    }`,
  },
  role: { id: 1, name: 'Sample Role' }, // Replace with actual role data
  status: { id: 1, name: 'Active' }, // Replace with actual status data
  isLeader: true,
  country: 'United States',
  dateOfBirth: new Date('1990-01-15'),
  concentration: 'Backend Developer',
  description: 'Sample user description',
  experience: '2 years',
  frameworks: ['NodeJS', 'React', 'jQuery'],
  programmingLanguages: ['JS', 'Swift', 'Dart', 'Scala', 'Ruby'],
  universities: [
    {
      id: 1,
      name: 'Sample University',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      admissionDate: new Date('2008-09-01'),
      graduationDate: new Date('2012-05-15'),
    },
  ],
  jobs: [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCo',
      startDate: new Date('2012-06-01'),
      endDate: new Date('2015-12-31'),
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Project A',
      link: 'https://projecta.example.com',
    },
  ],
  links: {
    id: 1,
    github: 'https://github.com/sampleuser',
    linkedIn: 'https://www.linkedin.com/in/sampleuser',
    behance: null, // Replace with actual Behance link if available
    telegram: 'https://t.me/sampleuser',
  },
  notifications: [], // Replace with actual notification data
  team: null, // Replace with actual team data if the user is part of a team
  createdAt: new Date('2022-01-01'), // Replace with actual creation date
  updatedAt: new Date('2022-02-15'), // Replace with actual update date
  deletedAt: null,
};
