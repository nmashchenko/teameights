import { ITeam } from '@teameights/types';
import { userResponseFixture, generateRandomUserResponseFixture } from './user';
import { faker } from '@faker-js/faker';

const users = generateRandomUserResponseFixture(7);
export const teamFixture: ITeam = {
  id: 1,
  name: 'Sample Team',
  description: 'This is a sample team',
  leader: userResponseFixture,
  members: users,
  country: 'Russia',
  tag: 'SampleTag',
  type: 'open',
  wins: 10,
  points: 100,
  photo: {
    id: faker.number.int(),
    path: `https://picsum.photos/${Math.floor(Math.random() * 1001) + 3000}/${
      Math.floor(Math.random() * 1001) + 3000
    }`,
  },
  createdAt: new Date('2023-10-19T12:00:00Z'),
  updatedAt: new Date('2023-10-19T12:30:00Z'),
  deletedAt: new Date('2023-10-19T13:00:00Z'),
};
