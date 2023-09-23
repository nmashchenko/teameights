import { clsx } from 'clsx';
import React from 'react';

import { SidebarChecksIcon, SidebarNotificationClose } from 'shared/assets';
import { IconWrapper } from 'shared/ui';

import { SidebarNotificationsList } from '../notification-list/notification-list';
import { NotificationsModalProps } from './notification-modal';

import styles from './notification-modal.module.scss';

interface MobileModalContentProps extends Omit<NotificationsModalProps, 'setNotificationModal'> {
  closeNotificationsModal: () => void;
  markAllAsRead: () => void;
  setUnreadIds: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export const SidebarMobileModalContent: React.FC<MobileModalContentProps> = props => {
  const {
    notificationModal,
    userNotifications,
    closeNotificationsModal,
    markAllAsRead,
    setUnreadIds,
  } = props;
  return (
    <div
      className={clsx(styles.mobileNotificationsModal, { [styles.modalActive]: notificationModal })}
    >
      <div className={styles.mobileWrapper}>
        <div>
          <div className={styles.notificationsHeader}>
            <h3 className={styles.text}>Notifications</h3>
            <div className={styles.crossBtn} onClick={closeNotificationsModal}>
              <SidebarNotificationClose width={14} height={14} />
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
            <SidebarChecksIcon />
          </IconWrapper>
          <p>Mark all as read</p>
        </button>
      </div>
    </div>
  );
};
