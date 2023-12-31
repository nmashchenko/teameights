import { NotificationType } from '@teameights/types';

/**
 * Sort Notifications Function
 *
 * This function sorts an array of notifications in descending order based on their `createdAt` timestamp.
 * It takes an array of Notification objects and returns a new array that is sorted.
 *
 * @example
 * const notifications = [
 *   {
 *     _id: '1',
 *     createdAt: new Date('2023-01-01T12:00:00Z'),
 *     // ... other properties
 *   },
 *   {
 *     _id: '2',
 *     createdAt: new Date('2023-01-02T12:00:00Z'),
 *     // ... other properties
 *   }
 * ];
 *
 * const sortedNotifications = sortNotifications(notifications);
 * console.log(sortedNotifications);
 *
 * @function
 * @param {Notification[]} notifications - An array of Notification objects.
 * @returns {Notification[]} - A new array of Notification objects sorted in descending order by `createdAt`.
 */
export const sortNotifications = (notifications: NotificationType[]) => {
  return [...notifications].sort(
    (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  );
};
