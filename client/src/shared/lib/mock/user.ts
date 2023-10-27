import { faker } from '@faker-js/faker';
import {
  ExperienceType,
  IFileEntity,
  IJob,
  ILinks,
  IProject,
  IRole,
  IStatus,
  IUniversity,
  IUserBase,
} from '@teameights/types';
import { getRandomItemFromArray, getRandomNumberBetween } from './common';
import { generateMockTeam } from './team';
import { generateRandomNotification } from '@/shared/lib/mock/notification';

export const generateMockFileEntity = (): IFileEntity => {
  return {
    id: faker.number.int(),
    path: `https://picsum.photos/${getRandomNumberBetween(1000, 1500)}/${getRandomNumberBetween(
      1000,
      1500
    )}`,
  };
};

export const generateMockStatus = (): IStatus => ({
  id: faker.number.int(),
  name: faker.lorem.word(),
});

export const generateMockRole = (): IRole => ({
  id: faker.number.int(),
  name: faker.lorem.word(),
});

export const generateMockProject = (): IProject => ({
  id: faker.number.int(),
  title: faker.lorem.sentence(),
  link: faker.internet.url(),
});

export const generateMockLinks = (): ILinks => ({
  id: faker.number.int(),
  github: faker.internet.url(),
  linkedIn: faker.internet.url(),
  behance: faker.internet.url(),
  telegram: faker.internet.url(),
});

export const generateMockJob = (): IJob => ({
  id: faker.number.int(),
  title: faker.person.jobTitle(),
  company: faker.company.name(),
  startDate: faker.date.past(),
  endDate: faker.datatype.boolean() ? faker.date.past() : null,
});

export const generateMockUniversity = (): IUniversity => ({
  id: faker.number.int(),
  name: faker.company.name(),
  degree: faker.person.jobType(),
  major: faker.person.jobArea(),
  admissionDate: faker.date.past(),
  graduationDate: faker.datatype.boolean() ? faker.date.past() : null,
});

export const generateUserMockData = (includeNotifications?: boolean): IUserBase => {
  const user: IUserBase = {
    id: faker.number.int(),
    username: faker.internet.userName(),
    fullName: faker.person.firstName(),
    photo: faker.datatype.boolean() ? generateMockFileEntity() : null,
    role: generateMockRole(),
    status: generateMockStatus(),
    isLeader: faker.datatype.boolean(),
    country: faker.location.country(),
    dateOfBirth: faker.date.past(30),
    concentration: faker.lorem.word(),
    description: faker.datatype.boolean() ? faker.lorem.sentence() : null,
    experience: getRandomItemFromArray([
      'No experience',
      'Few months',
      '1 year',
      '2 years',
      '3 years',
      '4 years',
      '5+ years',
    ]) as ExperienceType,
    programmingLanguages: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() =>
      faker.lorem.word()
    ),
    frameworks: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() =>
      faker.lorem.word()
    ),
    universities: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
      generateMockUniversity()
    ),
    jobs: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => generateMockJob()),
    projects: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
      generateMockProject()
    ),
    links: faker.datatype.boolean() ? generateMockLinks() : null,
    notifications: [],
    team: faker.datatype.boolean() ? generateMockTeam() : null,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    deletedAt: faker.datatype.boolean() ? faker.date.recent() : null,
  };

  if (includeNotifications) {
    const notificationsCount = faker.number.int({ min: 1, max: 5 });
    user.notifications = Array.from({ length: notificationsCount }).map(() =>
      generateRandomNotification()
    );
  }

  return user;
};

export const generateMultipleUsers = (
  count: number,
  includeNotifications?: boolean
): IUserBase[] => {
  return Array.from({ length: count }).map(() => generateUserMockData(includeNotifications));
};
