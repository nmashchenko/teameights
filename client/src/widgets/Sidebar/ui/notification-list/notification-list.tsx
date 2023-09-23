import React, { useRef } from 'react';

import { Notification } from 'entities/notification';

import styles from './notification-list.module.scss';
import { NotificationsItem } from '../notification-item/notification-item';
import { sortNotifications } from './lib/sort-notifications';

interface NotificationsListProps {
  userNotifications: Notification[];
  setUnreadIds: (callback: (prev: Set<string>) => Set<string>) => void;
  closeNotificationsModal: () => void;
}

export const SidebarNotificationsList: React.FC<NotificationsListProps> = props => {
  const { userNotifications, setUnreadIds, closeNotificationsModal } = props;

  const listRef = useRef<HTMLUListElement>(null);

  const sortedNotifications = React.useMemo(
    () => sortNotifications(userNotifications),
    [userNotifications]
  );

  const handleIntersection = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const itemId = entry.target.getAttribute('data-notification-id');
          const isRead = entry.target.getAttribute('data-notification-read');

          if (isRead === 'false' && itemId) {
            setUnreadIds(prev => new Set([...Array.from(prev), itemId]));
          }
        }
      });
    },
    [setUnreadIds]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    const listItems = listRef.current?.querySelectorAll('[data-notification-read]');
    listItems?.forEach(item => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <ul className={styles.notificationsList} ref={listRef}>
      {sortedNotifications.map(notification => (
        <NotificationsItem
          key={notification._id}
          closeNotificationsModal={closeNotificationsModal}
          notification={notification}
        />
      ))}
    </ul>
  );
};
