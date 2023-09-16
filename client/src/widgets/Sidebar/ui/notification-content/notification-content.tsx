// NotificationsContent.tsx

import React from 'react';

import styles from './notification-content.module.scss';
import sidebarStyles from '../Sidebar/Sidebar.module.scss';
import { IconWrapper } from 'shared/ui';
import { SidebarNotification } from 'shared/assets';
import clsx from 'clsx';
import NotificationsModal from 'widgets/Sidebar/ui/notification-modal/notification-modal';

interface NotificationsCountProps {
  pointerEvents?: 'none' | 'all';
  top?: string;
  right?: string;
  left?: string;
  children: React.ReactNode;
}

const NotificationsCount: React.FC<NotificationsCountProps> = ({
  pointerEvents = 'none',
  top = 'auto',
  right = 'auto',
  left = 'auto',
  children,
}) => {
  return (
    <div
      className={styles.notificationsCount}
      style={
        {
          '--pointer-events': pointerEvents,
          '--top': top,
          '--right': right,
          '--left': left,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export const NotificationsContent: React.FC<any> = ({
  userNotifications,
  sidebar,
  setNotificationModal,
  notificationModal,
}) => {
  console.log('@us', userNotifications);
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
          <NotificationsCount pointerEvents={sidebar.toString()} top='6px' left='28px'>
            {unreadMessages?.length}
          </NotificationsCount>
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
