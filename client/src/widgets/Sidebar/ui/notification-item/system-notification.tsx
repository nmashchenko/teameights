import React from 'react';

import { FlexWrapper } from '@/shared/ui';
import { SidebarLightningIcon } from '@/shared/assets';
import { getPastTime } from '@/shared/lib';
import { SystemNotification } from '@/entities/notification';

import styles from './notification-item.module.scss';

interface SystemNotificationProps {
  notification: SystemNotification;
}

export const SidebarSystemNotification: React.FC<SystemNotificationProps> = props => {
  const { notification } = props;
  return (
    <>
      <FlexWrapper gap='12px'>
        <div className={`${styles.messagePicture} ${styles.small}`}>
          {!notification.read && <div className={styles.messageCircle} />}
          <SidebarLightningIcon />
        </div>
        <p className={styles.messageText}>{notification.system_message}</p>
      </FlexWrapper>
      <p className={styles.sendingTime}>{getPastTime(notification.createdAt)}</p>
    </>
  );
};
