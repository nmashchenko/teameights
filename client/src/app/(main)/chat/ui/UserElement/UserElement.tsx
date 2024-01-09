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
  isGroup
}: IUserElement) {
  return (
    <div
      style={{
        borderBottom: '1px #434752 solid',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          alignItems: 'center',
          width: '370px',
          height: '66px',
          margin: '8px 24px 8px 24px',
        }}
      >
        <Image
          style={{ borderRadius: '100px', marginRight: '10px' }}
          src={avatarUrl}
          width={50}
          height={50}
          alt=""
        />

        <div style={{ display: 'flex', flexDirection: 'column', minWidth: "310px" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography size='body_m'>
              {title}
            </Typography>
            <p>{timestampOfLastMessage}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
            <div style={{ display: 'inline-flex', textWrap: 'nowrap' }}>
              <p style={{ color: 'rgba(91, 212, 36, 1)' }}>{lastMessageSenderName}</p>
              <p>{`: ${lastMessage}`}</p>
            </div>

            {hasUnreadMessages ? (
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '21px',
                  maxWidth: '26px',
                  padding: '2px 6px',
                  background: 'rgba(91, 212, 36, 1)',
                  borderRadius: '10px',
                  color: 'rgba(30, 30, 30, 1)',
                }}
              >
                {countOfUnreadMessages}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
