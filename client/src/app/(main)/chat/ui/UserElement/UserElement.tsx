import Image from 'next/image';
import { Typography } from '@/shared/ui';

import styles from './UserElement.module.scss';
import { useContext } from 'react';
import { CurrentChat } from '../../page';

export interface IUserElement {
  chat: any;
}

export function UserElement({ chat }: IUserElement) {
  const { setCurrentChat } = useContext(CurrentChat);

  return (
    <div onClick={() => setCurrentChat(chat)} className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          style={{ borderRadius: '100px', marginRight: '10px' }}
          src={
            'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          width={50}
          height={50}
          alt=''
        />

        <div className={styles.userInfo}>
          <div className={styles.titles}>
            <Typography size='body_m'>{chat.title}</Typography>

            <div className={styles.rightData}>
              <div className={styles.checker}>
                {/*{isLastMessageChecked ? (*/}
                {/*  <ChecksIcon fill='rgba(91, 212, 36, 1)' />*/}
                {/*) : (*/}
                {/*  <CheckIcon fill='rgba(91, 212, 36, 1)' />*/}
                {/*)}*/}
              </div>
              {/*<p>{timestampOfLastMessage}</p>*/}
            </div>
          </div>

          {/*<div className={styles.lastMessage}>*/}
          {/*  <div style={{ display: 'inline-flex', textWrap: 'nowrap' }}>*/}
          {/*    <p style={{ color: 'rgba(91, 212, 36, 1)' }}>{`${lastMessageSenderName}: `}</p>*/}
          {/*    <p>*/}
          {/*      {lastMessage.length > 18 && hasUnreadMessages*/}
          {/*        ? `${lastMessage.substring(0, 18)}...`*/}
          {/*        : `${lastMessage.substring(0, 25)}`}*/}
          {/*    </p>*/}
          {/*  </div>*/}

          {/*  {hasUnreadMessages ? (*/}
          {/*    <p className={styles.unreadMessages}>{countOfUnreadMessages}</p>*/}
          {/*  ) : (*/}
          {/*    ''*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
