'use client';
import styles from './header.module.scss';
import { useGetMe } from '@/entities/session';
import { ChatCircleDotsIcon, PlusIcon, UserPlusIcon } from '@/shared/assets';
import { Button, Flex, ImageLoader, Typography } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { useParams } from 'next/navigation';
import { useGetUserByName } from '../lib/useGetUserByName';
import { useContext } from 'react';
import { ProfileContext } from '@/app/(main)/[username]/profile/lib/profile-context';
import { useAddFriend } from '@/entities/session/api/useAddFriend';
export const Header = () => {
  const { username } = useParams();
  const { data: me } = useGetMe();
  const { data: user } = useGetUserByName(username as string);
  const isMyProfile = useContext(ProfileContext);
  const { mutate: addFriend } = useAddFriend(String(me.id), String(user!.id));

  if (!user || !me) {
    return <Skeleton width={'100%'} height={'248px'} borderRadius={'15px'} />;
  }

  let interactions = (
    <Button size={'m'}>
      Edit Profile
      <PlusIcon />
    </Button>
  );
  if (!isMyProfile) {
    interactions = (
      <Flex gap={'8px'}>
        <Button typeBtn={'secondary'} size={'m'}>
          Message
          <ChatCircleDotsIcon />
        </Button>{' '}
        <Button onClick={() => addFriend()} size={'m'}>
          Add friend
          <UserPlusIcon />
        </Button>
      </Flex>
    );
  }

  const name = user.username ? '@' + user.username : '';
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.background}></div>
        <div className={styles.header}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <ImageLoader
                crownSize={user.isLeader ? 40 : undefined}
                width={100}
                height={100}
                className={styles.image}
                borderRadius={'50%'}
                src={String(user.photo?.path ?? '/images/placeholder.png')}
                alt={user.username ?? 'Profile picture'}
              />
            </div>
            <Flex direction={'column'} gap={'8px'} className={styles.name}>
              <div className={styles.fullName}>{user.fullName}</div>
              <Typography color={'greenBright'} variant={'p'} className={styles.username}>
                {name}
              </Typography>
            </Flex>
          </div>
          {interactions}
        </div>
      </div>
    </div>
  );
};
