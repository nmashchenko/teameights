import { faker } from '@faker-js/faker';
import { ISystemNotification, IUserBase, IUserProtectedResponse } from '@teameights/types';
import { generateMockUser } from './user';

export const generateSystemNotification = (
  initialUser?: IUserBase | IUserProtectedResponse
): ISystemNotification => ({
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

export const generateMockNotifications = (
  count: number,
  initialUser?: IUserBase | IUserProtectedResponse
): ISystemNotification[] => {
  // todo: add support for other types
  return Array.from({ length: count }).map(() => generateSystemNotification(initialUser));
};
