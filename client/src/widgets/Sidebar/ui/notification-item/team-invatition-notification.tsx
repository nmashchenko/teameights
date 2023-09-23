import React from 'react';
import Image from 'next/image';

import { FlexWrapper } from 'shared/ui';
import { getPastTime } from 'shared/lib';
import { TeamInvitationNotification } from 'entities/notification';

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
      <FlexWrapper gap='12px'>
        <div className={styles.messagePicture}>
          {!notification.read && <div className={styles.messageCircle} />}
          <Image width={32} height={32} src={notification.image} alt='Team invation icon' />
        </div>
        <div className={styles.messageContentWrapper}>
          <p className={styles.messageText}>{notification.message}</p>
          <FlexWrapper gap='8px'>
            <button onClick={handleAccept} className={`${styles.messageButton} ${styles.accept}`}>
              Accept
            </button>
            <button onClick={handleReject} className={styles.messageButton}>
              Reject
            </button>
          </FlexWrapper>
        </div>
      </FlexWrapper>
      <p className={styles.sendingTime}>{getPastTime(notification.createdAt)}</p>
    </>
  );
};
