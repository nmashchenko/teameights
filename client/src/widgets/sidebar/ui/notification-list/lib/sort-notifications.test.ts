import { sortNotifications } from './sort-notifications';
import { NotificationType } from '@teameights/types';

describe('sortNotifications', () => {
  it('should return a sorted array of notifications by createdAt date in descending order', () => {
    const notifications: NotificationType[] = [
      { createdAt: new Date('2021-01-01T00:00:00.000Z') } as NotificationType,
      { createdAt: new Date('2021-01-02T00:00:00.000Z') } as NotificationType,
      { createdAt: new Date('2021-01-03T00:00:00.000Z') } as NotificationType,
    ];

    const sortedNotifications = sortNotifications(notifications);
    expect(sortedNotifications.map(n => n.createdAt?.toISOString())).toEqual([
      '2021-01-03T00:00:00.000Z',
      '2021-01-02T00:00:00.000Z',
      '2021-01-01T00:00:00.000Z',
    ]);
  });

  it('should return an empty array when passed an empty array', () => {
    const notifications: NotificationType[] = [];
    const sortedNotifications = sortNotifications(notifications);
    expect(sortedNotifications).toEqual([]);
  });

  it('should return a sorted array of notifications when passed an array with one notification', () => {
    const notifications: NotificationType[] = [
      { createdAt: new Date('2021-01-01T00:00:00.000Z') } as NotificationType,
    ];

    const sortedNotifications = sortNotifications(notifications);
    expect(sortedNotifications.map(n => n.createdAt?.toISOString())).toEqual([
      '2021-01-01T00:00:00.000Z',
    ]);
  });

  it('should return a sorted array of notifications when passed an array with notifications that have the same createdAt date', () => {
    const notifications: NotificationType[] = [
      { createdAt: new Date('2021-01-01T00:00:00.000Z') } as NotificationType,
      { createdAt: new Date('2021-01-01T00:00:00.000Z') } as NotificationType,
      { createdAt: new Date('2021-01-01T00:00:00.000Z') } as NotificationType,
    ];

    const sortedNotifications = sortNotifications(notifications);
    expect(sortedNotifications.map(n => n.createdAt?.toISOString())).toEqual([
      '2021-01-01T00:00:00.000Z',
      '2021-01-01T00:00:00.000Z',
      '2021-01-01T00:00:00.000Z',
    ]);
  });
});
