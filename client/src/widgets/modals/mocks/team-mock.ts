import { ITeam } from 'teameights-types';

function createDummyResponse() {
  return {
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
}

export const team: ITeam = {
  id: 'team123',
  name: 'Sample Team',
  type: 'open',
  country: 'Sample Country',
  image: 'team-image-url',
  members: [
    {
      id: 1,
      photo: { id: '1', path: 'photo1.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 2,
      photo: { id: '2', path: 'photo2.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 3,
      photo: { id: '3', path: 'photo3.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 4,
      photo: { id: '4', path: 'photo4.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 5,
      photo: { id: '5', path: 'photo5.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 6,
      photo: { id: '6', path: 'photo6.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 7,
      photo: { id: '7', path: 'photo7.jpg' },
      ...createDummyResponse(),
    },
    {
      id: 8,
      photo: { id: '8', path: 'photo8.jpg' },
      ...createDummyResponse(),
    },
  ],
  description:
    'Our dev team consists of software engineers, frontend and backend developers, and designers who are dedicated to providing high-quality software solutions that meet customer needs and provide excellent customer service.',
  wins: 2,
  points: 380,
  leader: {
    id: 1,
    ...createDummyResponse(),
  },
  tag: 'sampleTag',
  ...createDummyResponse(),
};
