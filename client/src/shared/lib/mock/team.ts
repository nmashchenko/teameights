import { faker } from '@faker-js/faker';
import { ITeam, TeamType } from '@teameights/types';
import { generateMockFileEntity, generateUserMockData } from './user';
import { getRandomItemFromArray } from './common';

export const generateMockTeam = (): ITeam => {
  return {
    id: faker.number.int(),
    name: faker.word.words(),
    description: faker.datatype.boolean() ? faker.lorem.sentence() : null,
    leader: generateUserMockData(),
    members: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() =>
      generateUserMockData()
    ),
    country: faker.location.country(),
    tag: faker.lorem.word(),
    type: getRandomItemFromArray(['invite_only', 'closed', 'open']) as TeamType,
    wins: faker.number.int({ min: 0, max: 100 }),
    points: faker.number.int({ min: 0, max: 1000 }),
    photo: faker.datatype.boolean() ? generateMockFileEntity() : null,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    deletedAt: faker.datatype.boolean() ? faker.date.recent() : null,
  };
};
