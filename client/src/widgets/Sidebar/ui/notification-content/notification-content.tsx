import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import { IconWrapper } from 'shared/ui';
import { SidebarNotificationIcon } from 'shared/assets';
import { Notification } from 'entities/notification';

import { NotificationsModal } from '../notification-modal/notification-modal';
import { SidebarNotificationsCount } from './notifications-count';

import sidebarStyles from '../Sidebar/Sidebar.module.scss';
import styles from './notification-content.module.scss';

interface NotificationContentProps {
  userNotifications: Notification[] | undefined;
  sidebar: boolean;
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
  notificationModal: boolean;
}

export const SidebarNotificationsContent: React.FC<NotificationContentProps> = props => {
  const { notificationModal, setNotificationModal, userNotifications, sidebar } = props;

  const unreadMessages = React.useMemo(() => {
    return userNotifications?.filter(item => !item.read);
  }, [userNotifications]);

  const toggleNotificationModal = () => {
    setNotificationModal(prev => !prev);
  };

  return (
    <div className={styles.notificationsContent}>
      <div
        className={clsx(sidebarStyles.navInteractBtn, {
          [sidebarStyles.active]: sidebar,
          [sidebarStyles.modalActive]: notificationModal,
        })}
        onClick={toggleNotificationModal}
      >
        <IconWrapper width='24px' height='24px' cursor='pointer'>
          <SidebarNotificationIcon />
        </IconWrapper>
        <p>Notifications</p>
        {!!unreadMessages?.length && !notificationModal && (
          <SidebarNotificationsCount pointerEvents={sidebar ? 'all' : 'none'} top='6px' left='28px'>
            {unreadMessages?.length}
          </SidebarNotificationsCount>
        )}
      </div>
      <NotificationsModal
        userNotifications={userNotifications ? userNotifications : []}
        notificationModal={notificationModal}
        setNotificationModal={setNotificationModal}
      />
    </div>
  );
};
