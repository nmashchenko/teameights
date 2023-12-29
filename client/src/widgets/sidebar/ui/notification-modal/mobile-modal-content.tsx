import React, { Dispatch, FC, SetStateAction } from 'react';

import { ChecksIcon, XIcon } from '@/shared/assets';
import { Button, Drawer, Flex, IconWrapper } from '@/shared/ui';

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
        <Flex className={styles.notificationsHeader} direction='column' gap='8px'>
          <Flex width='100%' justify='space-between'>
            <h3 className={styles.text}>Notifications</h3>
            <div className={styles.crossBtn} onClick={closeNotificationsModal}>
              <XIcon />
            </div>
          </Flex>
          <Button onClick={markAllAsRead} width='100%' typeBtn='secondary'>
            <IconWrapper width='20px' height='20px'>
              <ChecksIcon />
            </IconWrapper>
            <p>Mark all as read</p>
          </Button>
        </Flex>
        <SidebarNotificationsList
          userNotifications={userNotifications}
          closeNotificationsModal={closeNotificationsModal}
          setUnreadIds={setUnreadIds}
        />
      </div>
    </Drawer>
  );
};
