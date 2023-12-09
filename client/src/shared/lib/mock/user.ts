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
  IUserProtectedResponse,
  NotificationType,
} from '@teameights/types';
import { getRandomItemFromArray, shuffleArray } from './common';
import {
  designerTools,
  fields,
  frameworks,
  managerTools,
  methodologies,
  programmingLanguages,
} from '@/shared/constant';

type Speciality = 'designer' | 'developer' | 'pm';
export const getRandomBadgeText = (
  min: number,
  max: number,
  type: Speciality = 'developer'
): string[] => {
  let data;

  if (type === 'pm') {
    data = methodologies;
  } else if (type === 'designer') {
    data = fields;
  } else {
    data = frameworks;
  }
  const allIcons = data.map(el => el.label);
  const shuffledIcons = shuffleArray(allIcons);

  const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

  return shuffledIcons.slice(0, randomLength);
};

export const getRandomBadgeIcon = (
  min: number,
  max: number,
  type: Speciality = 'developer'
): string[] => {
  let data;

  if (type === 'pm') {
    data = managerTools;
  } else if (type === 'designer') {
    data = designerTools;
  } else {
    data = programmingLanguages;
  }
  const allIcons = data.map(el => el.label);
  const shuffledIcons = shuffleArray(allIcons);

  const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

  return shuffledIcons.slice(0, randomLength);
};

export const generateMockFileEntity = (): IFileEntity => {
  return {
    id: faker.number.int(),
    path: `https://source.unsplash.com/random?${faker.lorem.word()}`,
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
  type: Speciality = 'developer',
  initialTeam?: ITeam,
  initialNotifications?: NotificationType[]
): IUserBase => {
  const user: IUserBase = {
    id: faker.number.int(),
    username: faker.internet.userName(),
    fullName: faker.person.firstName(),
    photo: generateMockFileEntity(),
    role: generateMockRole(),
    status: generateMockStatus(),
    isLeader: faker.datatype.boolean(),
    country: faker.location.country(),
    dateOfBirth: faker.date.past(),
    speciality: faker.lorem.word(),
    description: faker.datatype.boolean() ? faker.lorem.sentence({ min: 10, max: 50 }) : null,
    experience: getRandomItemFromArray([
      'No experience',
      'Few months',
      '1 year',
      '2 years',
      '3 years',
      '4 years',
      '5+ years',
    ]) as ExperienceType,
    universities: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
      generateMockUniversity()
    ),
    jobs: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => generateMockJob()),
    projects: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
      generateMockProject()
    ),
    links: faker.datatype.boolean() ? generateMockLinks() : null,
    skills: null,
    notifications: initialNotifications ? initialNotifications : [],
    // to avoid dead lock we can't generate team here, we will need to add team
    team: initialTeam ? initialTeam : null,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    deletedAt: faker.datatype.boolean() ? faker.date.recent() : null,
  };

  if (type === 'developer') {
    user.skills = {
      id: faker.number.int(),
      programmingLanguages: getRandomBadgeIcon(1, 5),
      frameworks: getRandomBadgeText(1, 5),
    };
  } else if (type === 'designer') {
    user.skills = {
      id: faker.number.int(),
      designerTools: getRandomBadgeIcon(1, 5, 'designer'),
      fields: getRandomBadgeText(1, 5, 'designer'),
    };
  } else {
    user.skills = {
      id: faker.number.int(),
      methodologies: getRandomBadgeText(1, 5, 'pm'),
      projectManagerTools: getRandomBadgeIcon(1, 5, 'pm'),
    };
  }

  return user;
};

export const addProtectedFields = (user: IUserBase): IUserProtectedResponse => {
  return {
    ...user,
    email: faker.internet.email(),
    provider: 'email',
    socialId: null,
  };
};

export const generateMockUsers = (count: number): IUserBase[] => {
  return Array.from({ length: count }).map(() => generateMockUser());
};
