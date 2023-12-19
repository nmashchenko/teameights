import React, { Dispatch, FC, SetStateAction } from 'react';

import { ChecksIcon, XIcon } from '@/shared/assets';
import { Drawer, IconWrapper } from '@/shared/ui';

import { SidebarNotificationsList } from '../notification-list/notification-list';
import { NotificationsModalProps } from './notification-modal';

import styles from './notification-modal.module.scss';

interface MobileModalContentProps extends Omit<NotificationsModalProps, 'setNotificationModal'> {
  closeNotificationsModal: () => void;
  markAllAsRead: () => void;
  setUnreadIds: Dispatch<SetStateAction<Set<string>>>;
}

export const SidebarMobileModalContent: FC<MobileModalContentProps> = props => {
  const {
    notificationModal,
    userNotifications,
    closeNotificationsModal,
    markAllAsRead,
    setUnreadIds,
  } = props;
  return (
    <Drawer
      open={notificationModal}
      onClose={closeNotificationsModal}
      isFullHeight
      className={styles.mobileWrapper}
    >
      <div>
        <div className={styles.notificationsHeader}>
          <h3 className={styles.text}>Notifications</h3>
          <div className={styles.crossBtn} onClick={closeNotificationsModal}>
            <XIcon />
          </div>
        </div>
        <SidebarNotificationsList
          userNotifications={userNotifications}
          closeNotificationsModal={closeNotificationsModal}
          setUnreadIds={setUnreadIds}
        />
      </div>
      <button className={styles.markAllBtnMobile} onClick={markAllAsRead}>
        <IconWrapper width='20px' height='20px'>
          <ChecksIcon />
        </IconWrapper>
        <p>Mark all as read</p>
      </button>
    </Drawer>
  );
};
