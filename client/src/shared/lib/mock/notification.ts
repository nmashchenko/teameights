import { faker } from '@faker-js/faker';
import { ISystemNotification, IUserBase } from '@teameights/types';
import { generateMockUser } from './user';

export const generateSystemNotification = (initialUser?: IUserBase): ISystemNotification => ({
  id: faker.number.int(),
  receiver: initialUser ? initialUser : generateMockUser(),
  type: 'system',
  read: faker.datatype.boolean(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  deletedAt: faker.date.recent(),
  data: {
    system_message: faker.lorem.sentence(),
  },
});
