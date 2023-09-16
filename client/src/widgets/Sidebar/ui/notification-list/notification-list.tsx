import React, { FC, useEffect, useRef } from 'react';
import styles from './notification-list.module.scss';
import { NotificationsItem } from '../notification-item/notification-item';

interface Notification {
  _id: string;
  createdAt: string;
  // ... other properties of a notification
}

interface NotificationsListProps {
  userNotifications: Notification[];
  setUnreadIds: (callback: (prev: Set<string>) => Set<string>) => void;
  closeNotificationsModal: () => void;
}

const NotificationsList: FC<NotificationsListProps> = ({
  userNotifications,
  setUnreadIds,
  closeNotificationsModal,
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  const sortedNotifications = [...userNotifications].sort(
    (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  );

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const itemId = entry.target.getAttribute('data-notification-id');
          const isRead = entry.target.getAttribute('data-notification-read');

          if (isRead === 'false' && itemId) {
            setUnreadIds(prev => new Set([...Array.from(prev), itemId]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    const listItems = listRef.current?.querySelectorAll('[data-notification-read]');

    listItems?.forEach(item => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [setUnreadIds, userNotifications]);

  return (
    <ul className={styles.notificationsList} ref={listRef}>
      {sortedNotifications.map(notification => (
        <NotificationsItem
          key={notification._id}
          closeNotificationsModal={closeNotificationsModal}
          /* TODO: FIX MEEEEEE!!!!!!!!! */
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          notification={notification}
        />
      ))}
    </ul>
  );
};

export default NotificationsList;
