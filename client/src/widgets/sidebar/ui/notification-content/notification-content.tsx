import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import { IconWrapper } from '@/shared/ui';
import { BellIcon } from '@/shared/assets';
import { Notification } from '@/entities/notification';

import { SidebarNotificationsModal } from '../notification-modal/notification-modal';
import { SidebarNotificationsCount } from './notifications-count';

import sidebarStyles from '../sidebar/sidebar.module.scss';
import styles from './notification-content.module.scss';

export interface NotificationContentProps {
  /**
   * An array of user notifications. Could be undefined.
   */
  userNotifications: Notification[] | undefined;
  /**
   * Flag indicating whether the sidebar is expanded.
   */
  isSidebarExpanded: boolean;
  /**
   * Function to toggle the notification modal.
   */
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
  /**
   * Flag indicating whether the notification modal is displayed.
   */
  notificationModal: boolean;
}

/**
 * The `SidebarNotificationsContent` component is responsible for rendering the notification content
 * in the sidebar. It displays a notification icon, the number of unread notifications,
 * and toggles a modal containing the user's notifications.
 *
 * Example:
 *
 * ```tsx
 * // Example usage of SidebarNotificationsContent
 * const notifications = [
 *    { read: false, / ...other properties / },
 *    { read: true, / ...other properties / },
 * ];
 * <SidebarNotificationsContent
 *    userNotifications={notifications}
 *    isSidebarExpanded={true}
 *    setNotificationModal={() => {}}
 *    notificationModal={false}
 * />
 * ```
 */
export const SidebarNotificationsContent: React.FC<NotificationContentProps> = props => {
  const { notificationModal, setNotificationModal, userNotifications, isSidebarExpanded } = props;

  const unreadMessages = React.useMemo(() => {
    return userNotifications?.filter(item => !item.read);
  }, [userNotifications]);

  const toggleNotificationModal = () => {
    setNotificationModal(prev => !prev);
  };

  return (
    <div className={styles.notificationsContent}>
      <div
        className={clsx(sidebarStyles.interactButton, {
          [sidebarStyles.active]: isSidebarExpanded,
          [sidebarStyles.modalActive]: notificationModal,
        })}
        onClick={toggleNotificationModal}
        aria-label='Notifications'
      >
        <IconWrapper width='24px' height='24px' cursor='pointer'>
          <BellIcon />
        </IconWrapper>
        <span>Notifications</span>
        {!!unreadMessages?.length && !notificationModal && (
          <SidebarNotificationsCount
            pointerEvents={isSidebarExpanded ? 'all' : 'none'}
            top='6px'
            left='28px'
          >
            {unreadMessages?.length}
          </SidebarNotificationsCount>
        )}
      </div>
      <SidebarNotificationsModal
        userNotifications={userNotifications ? userNotifications : []}
        notificationModal={notificationModal}
        setNotificationModal={setNotificationModal}
      />
    </div>
  );
};
