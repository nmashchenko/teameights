import React from 'react';

import { Flex } from '@/shared/ui';
import { LightningIcon } from '@/shared/assets';
import { getElapsedTime } from '@/shared/lib';

import styles from './notification-item.module.scss';
import { IFriendNotification } from '@teameights/types';
import { FriendButton } from '@/features/friend-button';
import { useGetFriends } from '@/entities/session';

interface SystemNotificationProps {
  notification: IFriendNotification;
}

/**
 * SidebarFriendNotification component renders system notification content.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {SystemNotification} props.notification - The system notification object.
 *
 * @example
 * <SidebarFriendNotification
 *    notification={systemNotificationObj}
 * />
 */
export const SidebarFriendNotification: React.FC<SystemNotificationProps> = props => {
  const { notification } = props;

  const myId = notification.receiver.id;
  const userId = notification.data.creator.id;
  const { data: friendships } = useGetFriends(userId);

  const isPending = friendships?.data.some(
    friendship =>
      (friendship.creator.id === myId || friendship.receiver.id === myId) &&
      friendship.status === 'pending'
  );

  return (
    <>
      <Flex gap='12px'>
        <div className={`${styles.messagePicture} ${styles.small}`}>
          {!notification.read && <div className={styles.messageCircle} />}
          <LightningIcon />
        </div>
        <Flex align='start' gap='12px' direction='column'>
          <p className={styles.messageText}>
            {notification.data.creator.username} sent you friend request!
          </p>
          {isPending && (
            <Flex gap='8px'>
              <FriendButton size='s' short={true} userId={userId} myId={myId} />
            </Flex>
          )}
        </Flex>
      </Flex>
      <p className={styles.sendingTime}>{getElapsedTime(notification.createdAt)}</p>
    </>
  );
};
