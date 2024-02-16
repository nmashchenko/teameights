import { useGetFriends } from '@/entities/session';
import { Card } from './card';
import { useParams } from 'next/navigation';
import { useGetUserByName } from '../lib/useGetUserByName';
import { CardSkeleton, Flex, ImageLoader, Typography } from '@/shared/ui';
import styles from './friends.module.scss';
import { ArrowRightIcon } from '@/shared/assets';

export const Friends = () => {
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);
  const { data: friends } = useGetFriends(user!.id);
  const friendshipList = friends?.data;

  if (!friends || !friendshipList) {
    return <CardSkeleton borderRadius={15} width={'40%'} height={'227px'} />;
  }

  let friendsContainer = (
    <Typography size={'body_s'} color={'greyNormal'}>
      List is empty.
    </Typography>
  );
  if (friendshipList.length) {
    const noun = friendshipList.length === 1 ? 'friend' : 'friends';
    const friendsList = friendshipList.map(friendship => {
      const { receiver, creator } = friendship;
      if (receiver.id !== user?.id) return receiver;
      return creator;
    });
    friendsContainer = (
      <Flex direction='column'>
        <Flex align='center' justify='space-between' margin='0 0 21px 0'>
          <Flex gap='5px'>
            <Typography size='body_m'>{friendshipList.length}</Typography>
            <Typography size='body_m'>{noun}</Typography>
          </Flex>
          <button>
            <Flex gap='6px' align='center'>
              <Typography size='body_m'>Show all</Typography>
              <ArrowRightIcon />
            </Flex>
          </button>
        </Flex>
        <Flex wrap={'wrap'} className={styles.friends_container}>
          {friendsList.slice(0, 8).map(friend => (
            <a
              className={styles.friend}
              href={`/${friend.username}/profile`}
              key={friend.id}
              title={friend.username}
            >
              <ImageLoader
                width={40}
                height={40}
                className={styles.avatar}
                borderRadius={'50%'}
                src={String(friend.photo?.path ?? '/images/placeholder.png')}
                alt={friend.username ?? 'Profile image'}
              />
            </a>
          ))}
        </Flex>
      </Flex>
    );
  }
  return (
    <Card style={{ width: '40%' }}>
      <Flex direction='column' gap='24px'>
        <Typography size={'heading_s'} color={'greenBright'}>
          Friends
        </Typography>
        {friendsContainer}
      </Flex>
    </Card>
  );
};
