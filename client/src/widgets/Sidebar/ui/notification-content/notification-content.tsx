import React, { Dispatch, SetStateAction } from 'react';

import styles from './notification-content.module.scss';
import sidebarStyles from '../Sidebar/Sidebar.module.scss';
import { IconWrapper } from 'shared/ui';
import { SidebarNotification } from 'shared/assets';
import clsx from 'clsx';
import NotificationsModal from 'widgets/Sidebar/ui/notification-modal/notification-modal';
import { SidebarNotificationsCount } from 'widgets/Sidebar/ui/notification-content/notifications-count';
import { Notifications } from 'entities/notification';

interface NotificationContentProps {
  userNotifications: Notifications[] | undefined;
  sidebar: boolean;
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
  notificationModal: boolean;
}

export const NotificationsContent: React.FC<NotificationContentProps> = ({
  userNotifications,
  sidebar,
  setNotificationModal,
  notificationModal,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unreadMessages = userNotifications?.filter((item: any) => !item.read);

  return (
    <div className={styles.notificationsContent}>
      <div
        className={clsx(sidebarStyles.navInteractBtn, {
          [sidebarStyles.active]: sidebar,
          [sidebarStyles.modalActive]: notificationModal,
        })}
        onClick={() => setNotificationModal((prev: boolean) => !prev)}
      >
        <IconWrapper width='24px' height='24px' cursor='pointer'>
          <SidebarNotification />
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
