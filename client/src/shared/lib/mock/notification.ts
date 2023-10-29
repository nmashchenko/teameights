import { faker } from '@faker-js/faker';
import { getRandomItemFromArray } from './common';
import {
  ISystemNotification,
  ITeam,
  ITeamInvitationNotification,
  IUserBase,
  StatusType,
} from '@teameights/types';
import { generateMockFileEntity, generateMockUser } from './user';
import { generateMockTeam } from './team';

export const generateSystemNotification = (initialUser?: IUserBase): ISystemNotification => ({
  id: faker.number.int(),
  user: initialUser ? initialUser : generateMockUser(),
  type: 'system',
  read: faker.datatype.boolean(),
  expiresAt: faker.date.future(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  system_message: faker.lorem.sentence(),
  deletedAt: faker.datatype.boolean() ? faker.date.past() : null,
});

export const generateTeamInvitationNotification = (
  initialUser?: IUserBase,
  initialTeam?: ITeam,
  initialFromUser?: IUserBase
): ITeamInvitationNotification => ({
  id: faker.number.int(),
  user: initialUser ? initialUser : generateMockUser(),
  type: 'team_invite',
  read: faker.datatype.boolean(),
  expiresAt: faker.date.future(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  team: initialTeam ? initialTeam : generateMockTeam(initialTeam),
  from_user: initialFromUser ? initialFromUser : generateMockUser(),
  to_user_email: faker.internet.email(),
  status: getRandomItemFromArray(['pending', 'accepted', 'rejected']) as StatusType,
  photo: generateMockFileEntity(),
  message: faker.lorem.sentence(),
  deletedAt: faker.datatype.boolean() ? faker.date.past() : null,
});
