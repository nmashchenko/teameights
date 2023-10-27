import { faker } from '@faker-js/faker';
import { getRandomItemFromArray } from './common';
import { ISystemNotification, ITeamInvitationNotification, StatusType } from '@teameights/types';
import { generateMockFileEntity, generateUserMockData } from './user';
import { generateMockTeam } from './team';

export const generateSystemNotification = (): ISystemNotification => ({
  id: faker.number.int(),
  user: generateUserMockData(),
  type: 'system',
  read: faker.datatype.boolean(),
  expiresAt: faker.date.future(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  system_message: faker.lorem.sentence(),
  deletedAt: faker.datatype.boolean() ? faker.date.past() : null,
});

export const generateTeamInvitationNotification = (): ITeamInvitationNotification => ({
  id: faker.number.int(),
  user: generateUserMockData(),
  type: 'team_invite',
  read: faker.datatype.boolean(),
  expiresAt: faker.date.future(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  team: generateMockTeam(),
  from_user: generateUserMockData(),
  to_user_email: faker.internet.email(),
  status: getRandomItemFromArray(['pending', 'accepted', 'rejected']) as StatusType,
  photo: generateMockFileEntity(),
  message: faker.lorem.sentence(),
  deletedAt: faker.datatype.boolean() ? faker.date.past() : null,
});

export const generateRandomNotification = (): ISystemNotification | ITeamInvitationNotification => {
  if (faker.datatype.boolean()) {
    return generateSystemNotification();
  } else {
    return generateTeamInvitationNotification();
  }
};
