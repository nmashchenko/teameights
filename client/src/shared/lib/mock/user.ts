import { faker } from '@faker-js/faker';
import {
  ExperienceType,
  IFileEntity,
  IJob,
  ILinks,
  IProject,
  IRole,
  IStatus,
  ITeam,
  IUniversity,
  IUserBase,
  IUserResponse,
  NotificationType,
} from '@teameights/types';
import { getRandomItemFromArray, getRandomNumberBetween, shuffleArray } from './common';
import { frameworkColors, languageOptions } from '@/shared/constant';

export const getRandomLanguages = (min: number, max: number): string[] => {
  const allLanguages = Object.keys(languageOptions);
  const shuffledLanguages = shuffleArray([...allLanguages]);

  const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

  return shuffledLanguages.slice(0, randomLength);
};

export const getRandomFrameworks = (min: number, max: number): string[] => {
  const allFrameworks = Object.keys(frameworkColors);
  const shuffledLanguages = shuffleArray([...allFrameworks]);

  const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

  return shuffledLanguages.slice(0, randomLength);
};

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

export const generateMockUser = (
  initialTeam?: ITeam,
  initialNotifications?: NotificationType[]
): IUserResponse => {
  return {
    id: faker.number.int(),
    username: faker.internet.userName(),
    fullName: faker.person.firstName(),
    photo: generateMockFileEntity(),
    role: generateMockRole(),
    status: generateMockStatus(),
    isLeader: faker.datatype.boolean(),
    country: faker.location.country(),
    dateOfBirth: faker.date.past(),
    concentration: faker.lorem.word(),
    description: faker.datatype.boolean() ? faker.lorem.sentence({ min: 10, max: 280 }) : null,
    experience: getRandomItemFromArray([
      'No experience',
      'Few months',
      '1 year',
      '2 years',
      '3 years',
      '4 years',
      '5+ years',
    ]) as ExperienceType,
    programmingLanguages: getRandomLanguages(1, 5),
    frameworks: getRandomFrameworks(1, 5),
    universities: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
      generateMockUniversity()
    ),
    jobs: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => generateMockJob()),
    projects: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
      generateMockProject()
    ),
    links: faker.datatype.boolean() ? generateMockLinks() : null,
    notifications: initialNotifications ? initialNotifications : [],
    // to avoid dead lock we can't generate team here, we will need to add team
    team: initialTeam ? initialTeam : null,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    deletedAt: faker.datatype.boolean() ? faker.date.recent() : null,
  };
};

export const generateMockUsers = (count: number): IUserBase[] => {
  return Array.from({ length: count }).map(() => generateMockUser());
};
