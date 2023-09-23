import { Notification } from 'entities/notification';

export const sortNotifications = (notifications: Notification[]) => {
  return [...notifications].sort(
    (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  );
};
