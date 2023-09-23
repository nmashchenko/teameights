import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import { IconWrapper } from '@/shared/ui';
import { SidebarNotificationIcon } from '@/shared/assets';
import { Notification } from '@/entities/notification';

import { SidebarNotificationsModal } from '../notification-modal/notification-modal';
import { SidebarNotificationsCount } from './notifications-count';

import sidebarStyles from 'widgets/Sidebar/ui/sidebar/sidebar.module.scss';
import styles from './notification-content.module.scss';

interface NotificationContentProps {
  userNotifications: Notification[] | undefined;
  isSidebarExpanded: boolean;
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
  notificationModal: boolean;
}

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
          <SidebarNotificationIcon />
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
