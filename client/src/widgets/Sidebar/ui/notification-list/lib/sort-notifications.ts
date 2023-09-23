import { Notifications } from 'entities/notification';

export const sortNotifications = (notifications: Notifications[]) => {
  return [...notifications].sort(
    (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  );
};
