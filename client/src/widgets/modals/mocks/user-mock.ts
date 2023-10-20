import { IUserResponse } from '@teameights/types';
import { ITeam } from '@teameights/types';
import { ExperienceType } from '@teameights/types';
import { IFileEntity } from '@teameights/types';
import { IStatus } from '@teameights/types';
import { IRole } from '@teameights/types';

function createDummyResponse() {
  return {
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
}

export const user: IUserResponse = {
  id: 1,
  username: 'Nikita',
  fullName: 'Novichok',
  photo: null as IFileEntity | null,
  status: { name: 'Novenkii' } as IStatus,
  role: { name: 'Administrator' } as IRole,
  isLeader: false,
  universities: [],
  jobs: [],
  projects: [],
  links: null,
  notifications: [],
  concentration: 'Backend Developer',
  experience: 'No experience' as ExperienceType,
  frameworks: ['NodeJS', 'React', 'Angular', 'Redux', 'Hadoop', 'jQuery'],
  programmingLanguages: ['Python', 'HTML', 'TS', 'JS', 'Swift', 'Dart', 'Scala', 'Ruby'],
  dateOfBirth: new Date(2002, 9, 1),
  country: 'Ukraine',
  team: null as ITeam | null,
  description:
    'Front-end developer with 4 years of experience. Passionate about solving complex problems and building innovative solutions. I have a strong understanding of software development best practices. Collaborative team player with effective communication skills.',
  ...createDummyResponse(),
};
