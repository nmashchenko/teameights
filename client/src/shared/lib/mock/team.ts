import { faker } from '@faker-js/faker';
import { ITeam, IUserBase, TeamType } from '@teameights/types';
import { generateMockFileEntity, generateMockUser, generateMockUsers } from './user';
import { getRandomItemFromArray } from './common';

export const generateMockTeam = (
  initialLeader?: IUserBase,
  initialMembers?: IUserBase[]
): ITeam => {
  return {
    id: faker.number.int(),
    name: faker.word.words(),
    description: faker.datatype.boolean() ? faker.lorem.sentence() : null,
    leader: initialLeader ? initialLeader : generateMockUser(),
    members: initialMembers ? initialMembers : generateMockUsers(5),
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
