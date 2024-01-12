import { Typography } from '@/shared/ui';
import Image from 'next/image';
import { SearchIcon } from '@/shared/assets'; // TODO: Add another icons: Headphones and ThreeDotsVertilcal
import styles from './ChatHeader.module.scss';

interface IChatHeader {
  avatarGroup: string;
  countOfMembers: number;
  isGroup: boolean;
}

export const ChatHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.groupInfo}>
          <Image
            style={{ borderRadius: '100px', marginRight: '16px' }}
            src='https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            width={50}
            height={50}
          />

          <div className={styles.titlesContainer}>
            <Typography size='heading_s'>Cool developers</Typography>
            <p style={{ color: 'rgba(143, 144, 148, 1)', fontSize: '13px' }}>7 members</p>
          </div>
        </div>

        <div className={styles.icons}>
          <SearchIcon size='24' />
          <SearchIcon size='24' />
          <SearchIcon size='24' />
        </div>
      </div>
    </div>
  );
};
