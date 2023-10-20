import React from 'react';

import { Flex } from '@/shared/ui';
import { LightningIcon } from '@/shared/assets';
import { getElapsedTime } from '@/shared/lib';

import styles from './notification-item.module.scss';
import { ISystemNotification } from '@teameights/types';

interface SystemNotificationProps {
  notification: ISystemNotification;
}

/**
 * SidebarSystemNotification component renders system notification content.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {SystemNotification} props.notification - The system notification object.
 *
 * @example
 * <SidebarSystemNotification
 *    notification={systemNotificationObj}
 * />
 */
export const SidebarSystemNotification: React.FC<SystemNotificationProps> = props => {
  const { notification } = props;
  return (
    <>
      <Flex gap='12px'>
        <div className={`${styles.messagePicture} ${styles.small}`}>
          {!notification.read && <div className={styles.messageCircle} />}
          <LightningIcon />
        </div>
        <p className={styles.messageText}>{notification.system_message}</p>
      </Flex>
      <p className={styles.sendingTime}>{getElapsedTime(notification.createdAt)}</p>
    </>
  );
};
