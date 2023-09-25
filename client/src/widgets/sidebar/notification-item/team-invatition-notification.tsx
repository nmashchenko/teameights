import React from 'react';
import Image from 'next/image';

import { Flex } from '@/shared/ui';
import { getElapsedTime } from '@/shared/lib';
import { TeamInvitationNotification } from '@/entities/notification';

import styles from './notification-item.module.scss';

interface TeamInvatitionNotificationProps {
  notification: TeamInvitationNotification;
  handleAccept: () => void;
  handleReject: () => void;
}

export const SidebarTeamInvatitionNotification: React.FC<
  TeamInvatitionNotificationProps
> = props => {
  const { notification, handleReject, handleAccept } = props;
  return (
    <>
      <Flex gap='12px'>
        <div className={styles.messagePicture}>
          {!notification.read && <div className={styles.messageCircle} />}
          <Image width={32} height={32} src={notification.image} alt='Team invation icon' />
        </div>
        <div className={styles.messageContentWrapper}>
          <p className={styles.messageText}>{notification.message}</p>
          <Flex gap='8px'>
            <button onClick={handleAccept} className={`${styles.messageButton} ${styles.accept}`}>
              Accept
            </button>
            <button onClick={handleReject} className={styles.messageButton}>
              Reject
            </button>
          </Flex>
        </div>
      </Flex>
      <p className={styles.sendingTime}>{getElapsedTime(notification.createdAt)}</p>
    </>
  );
};
