import { IUserResponse } from 'teameights-types';

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
  concentration: 'Backend Developer',
  experience: '3-5 years of experience',
  frameworks: ['NodeJS', 'React', 'Angular', 'Redux', 'Hadoop', 'jQuery'],
  programmingLanguages: ['Python', 'HTML', 'TS', 'JS', 'Swift', 'Dart', 'Scala', 'Ruby'],
  dateOfBirth: new Date(2002, 9, 1),
  country: 'Ukraine',
  team: [],
  description:
    'Front-end developer with 4 years of experience. Passionate about solving complex problems and building innovative solutions. I have a strong understanding of software development best practices. Collaborative team player with effective communication skills.',
  ...createDummyResponse(),
};
