import React from 'react';
import { clsx } from 'clsx';

import { IconWrapper } from 'shared/ui';
import { SidebarChecksIcon, SidebarNotificationClose } from 'shared/assets';

import { SidebarNotificationsList } from '../notification-list/notification-list';
import { NotificationsModalProps } from './notification-modal';

import styles from './notification-modal.module.scss';

interface DesktopModalContentProps extends Omit<NotificationsModalProps, 'setNotificationModal'> {
  notificationModalRef: React.RefObject<HTMLDivElement>;
  markAllAsRead: () => void;
  closeNotificationsModal: () => void;
  setUnreadIds: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export const SidebarDesktopModalContent: React.FC<DesktopModalContentProps> = props => {
  const {
    notificationModal,
    notificationModalRef,
    markAllAsRead,
    closeNotificationsModal,
    userNotifications,
    setUnreadIds,
  } = props;
  return (
    <div
      className={clsx(styles.notificationsModal, { [styles.active]: notificationModal })}
      ref={notificationModalRef}
      onClick={e => e.stopPropagation()}
    >
      <div className={styles.notificationsHeader}>
        <div className={styles.markAllBtn} onClick={markAllAsRead}>
          <IconWrapper width='20px' height='20px'>
            <SidebarChecksIcon />
          </IconWrapper>
          <p>Mark all as read</p>
        </div>
        <div className={styles.crossBtn} onClick={closeNotificationsModal}>
          <SidebarNotificationClose width={20} height={20} />
        </div>
      </div>
      <SidebarNotificationsList
        userNotifications={userNotifications}
        closeNotificationsModal={closeNotificationsModal}
        setUnreadIds={setUnreadIds}
      />
    </div>
  );
};
