import React from 'react';
import { clsx } from 'clsx';

import { Flex, IconWrapper } from '@/shared/ui';
import { ChecksIcon, XIcon } from '@/shared/assets';

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
      <Flex className={styles.notificationsHeader} width='100%' justify='space-between'>
        <div className={styles.markAllBtn} onClick={markAllAsRead}>
          <IconWrapper width='20px' height='20px'>
            <ChecksIcon />
          </IconWrapper>
          <p>Mark all as read</p>
        </div>
        <div className={styles.crossBtn} onClick={closeNotificationsModal}>
          <XIcon />
        </div>
      </Flex>
      <SidebarNotificationsList
        userNotifications={userNotifications}
        closeNotificationsModal={closeNotificationsModal}
        setUnreadIds={setUnreadIds}
      />
    </div>
  );
};
