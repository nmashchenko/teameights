import React, { useRef } from 'react';

import { Notification } from '@/entities/notification';

import styles from './notification-list.module.scss';
import { SidebarNotificationsItem } from '../notification-item/notification-item';
import { sortNotifications } from './lib/sort-notifications';

export interface NotificationsListProps {
  /**
   * Array of user notifications
   */
  userNotifications: Notification[];
  /**
   * Function to set unread IDs based on intersection
   */
  setUnreadIds: (callback: (prev: Set<string>) => Set<string>) => void;
  /**
   * Function to close notifications modal
   */
  closeNotificationsModal: () => void;
}

/**
 * This component is used to display a list of notifications in a sidebar.
 * It takes a list of user notifications, sorts them based on a specific logic, and
 * provides an intersection observer to track which notifications are visible in the viewport.
 *
 * Here is a basic usage example:
 *
 * ```tsx
 * const userNotifications = [
 *  {
 *    _id: '1',
 *    type: 'SystemNotification',
 *    system_message: 'Your password will expire soon',
 *    read: false
 *  },
 *  // ... more notifications
 * ];
 *
 * const setUnreadIds = (callback) => {
 *   // logic to set unread IDs
 * };
 *
 * const closeNotificationsModal = () => {
 *  // logic to close modal
 * };
 *
 * <SidebarNotificationsList
 *   userNotifications={userNotifications}
 *   setUnreadIds={setUnreadIds}
 *   closeNotificationsModal={closeNotificationsModal}
 * />
 * ```
 */
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
        <SidebarNotificationsItem
          key={notification._id}
          closeNotificationsModal={closeNotificationsModal}
          notification={notification}
        />
      ))}
    </ul>
  );
};
