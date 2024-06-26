'use client';
import styles from './header.module.scss';
import { useGetMe } from '@/entities/session';
import { ChatCircleDotsIcon, PlusIcon } from '@/shared/assets';
import { Button, CardSkeleton, Flex, ImageLoader, Typography } from '@/shared/ui';
import { useParams } from 'next/navigation';
import { useGetUserByName } from '../../lib/useGetUserByName';
import { useContext } from 'react';
import { ProfileContext } from '@/app/(main)/[username]/profile/lib/profile-context';
import { FriendButton } from '@/features/friend-button';
export const Header = () => {
  const { username } = useParams();
  const { data: me } = useGetMe();
  const { data: user } = useGetUserByName(username as string);
  const isMyProfile = useContext(ProfileContext);

  if (!user) {
    return <CardSkeleton width={'100%'} height={'248px'} borderRadius={15} />;
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
        </Button>
        <FriendButton myId={me?.id} userId={user.id} />
      </Flex>
    );
  }

  // Prohibit any interactions with a profile if a user is not logged in
  if (!me) {
    interactions = <></>;
  }

  const name = user.username ? '@' + user.username : '';
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.background}></div>
        <Flex align='end' justify='space-between' wrap='wrap' className={styles.header}>
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
        </Flex>
      </div>
    </div>
  );
};
