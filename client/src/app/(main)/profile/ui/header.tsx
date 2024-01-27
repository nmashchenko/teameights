'use client';
import styles from './header.module.scss';
import { useGetMe } from '@/entities/session';
import { UserPlusIcon } from '@/shared/assets';
import { Button, Flex, ImageLoader, Typography } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
export const Header = () => {
  const { data: user } = useGetMe();
  if (!user) {
    return <Skeleton width={'100%'} height={'248px'} borderRadius={'15px'} />;
  }

  const username = user.username ? '@' + user.username : '';
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.background}></div>
        <div className={styles.header}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <ImageLoader
                crownSize={40}
                width={100}
                height={100}
                className={styles.image}
                borderRadius={'50%'}
                src={String(user.photo ?? '/images/placeholder.png')}
                alt={user.username ?? 'Profile picture'}
              />
            </div>
            <Flex direction={'column'} gap={'8px'} className={styles.name}>
              <div className={styles.fullName}>{user.fullName}</div>
              <Typography color={'greenBright'} variant={'p'} className={styles.username}>
                {username}
              </Typography>
            </Flex>
          </div>
          <Button size={'m'}>
            Edit profile
            <UserPlusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
