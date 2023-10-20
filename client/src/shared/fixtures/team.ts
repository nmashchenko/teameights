import { ITeam } from '@teameights/types';
import userResponseFixture, { generateRandomUserResponseFixture } from './user';

const users = generateRandomUserResponseFixture(7);
export const teamFixture: ITeam = {
  id: '1',
  name: 'Sample Team',
  description: 'This is a sample team',
  leader: userResponseFixture,
  members: users,
  country: 'United States',
  tag: 'SampleTag',
  type: 'open',
  wins: 10,
  points: 100,
  image: 'https://picsum.photos/3000/3000',
  createdAt: new Date('2023-10-19T12:00:00Z'),
  updatedAt: new Date('2023-10-19T12:30:00Z'),
  deletedAt: new Date('2023-10-19T13:00:00Z'),
};

export default teamFixture;
