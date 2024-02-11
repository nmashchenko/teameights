import { Typography } from '@/shared/ui';
import { Message } from "../../types/IMessage"
import styles from './Message.module.scss';
import Image from 'next/image';

export function Message({
  senderId,
  receivers,
  groupId,
  isMessageRead,
  text,
  fileId,
  isThisMessageMine,
  timestamp,
}: Message) {
  return (
    <div className={styles.wrapper} style={{ marginLeft: isThisMessageMine ? '35%' : '0' }}>
      {isThisMessageMine ? (
        <div></div>
      ) : (
        <Image
          src='https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          height={32}
          width={32}
          alt='Avatar'
        />
      )}
      <div className={styles.messageContainer}>
        {isThisMessageMine ? <div></div> : <div className={styles.author}>Me</div>}
        <div
          className={styles.message}
          style={{
            background: isThisMessageMine ? 'rgba(6, 64, 6, 1)' : '#2F3239',
            borderRadius: isThisMessageMine ? '10px 0px 10px 10px' : '0px 10px 10px 10px',
          }}
        >
          <Typography>{text}</Typography>
          <div className={styles.timestamp}>{timestamp}</div>
        </div>
      </div>
    </div>
  );
}
