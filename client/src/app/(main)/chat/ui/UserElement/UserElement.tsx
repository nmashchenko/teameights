import Image from 'next/image';
import { Typography } from '@/shared/ui';

import { CheckIcon } from '@/shared/assets';
import { ChecksIcon } from '@/shared/assets';

import styles from './UserElement.module.scss';

export interface IUserElement {
  avatarUrl: string;
  title: string;
  hasUnreadMessages: boolean;
  countOfUnreadMessages: number; // 0 >= countOfUnreadMessages. 0 -- if no messages
  lastMessage: string;
  lastMessageSenderName: string;
  isLastMessageChecked: boolean;
  timestampOfLastMessage: string;
  isGroup: boolean;
}

export function UserElement({
  avatarUrl,
  title,
  hasUnreadMessages,
  countOfUnreadMessages,
  lastMessage,
  lastMessageSenderName,
  isLastMessageChecked,
  timestampOfLastMessage,
  isGroup,
}: IUserElement) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          style={{ borderRadius: '100px', marginRight: '10px' }}
          src={avatarUrl}
          width={50}
          height={50}
          alt=''
        />

        <div className={styles.userInfo}>
          <div className={styles.titles}>
            <Typography size='body_m'>{title}</Typography>
            <p>{timestampOfLastMessage}</p>
          </div>

          <div className={styles.lastMessage}>
            <div style={{ display: 'inline-flex', textWrap: 'nowrap' }}>
              <p style={{ color: 'rgba(91, 212, 36, 1)' }}>{`${lastMessageSenderName}: `}</p>
              <p>
                {lastMessage.length > 18 && hasUnreadMessages
                  ? `${lastMessage.substring(0, 18)}...`
                  : `${lastMessage.substring(0, 25)}`}
              </p>
            </div>

            {hasUnreadMessages ? (
              <p className={styles.unreadMessages}>{countOfUnreadMessages}</p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
