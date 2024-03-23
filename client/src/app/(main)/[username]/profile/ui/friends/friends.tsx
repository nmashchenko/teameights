import { useGetFriends } from '@/entities/session';
import { Card } from '../card/card';
import { useParams } from 'next/navigation';
import { useGetUserByName } from '../../lib/useGetUserByName';
import { CardSkeleton, Flex, ImageLoader, Typography } from '@/shared/ui';
import styles from './friends.module.scss';
import { ArrowRightIcon } from '@/shared/assets';
import { useState } from 'react';
import layoutStyles from '../../layout.module.scss';
import { FriendsModal } from './friends-modal';
import { IUserBase } from '@teameights/types';

export const Friends = () => {
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);
  const { data: friends } = useGetFriends(user!.id);
  const friendshipList = friends?.data;
  const [isFriendsModalOpen, setFriendsModal] = useState(false);

  if (!friends || !friendshipList) {
    return <CardSkeleton borderRadius={15} width={'40%'} height={'227px'} />;
  }

  let friendsContainer = (
    <Typography size={'body_s'} color={'greyNormal'}>
      List is empty.
    </Typography>
  );
  if (friendshipList.length) {
    const friendsList = friendshipList.reduce<IUserBase[]>((accumulator, friendship) => {
      if (friendship.status === 'accepted') {
        const { receiver, creator } = friendship;
        const friend = receiver.id !== user?.id ? receiver : creator;

        const existingFriendIndex = accumulator.findIndex(item => item?.id === friend.id);
        // filter out duplicates, since there can be two similar friendships with different creators
        if (existingFriendIndex === -1) {
          accumulator.push(friend);
        }
      }
      return accumulator;
    }, []);
    const noun = friendsList.length === 1 ? 'friend' : 'friends';
    friendsContainer = (
      <Flex direction='column'>
        <FriendsModal
          friendsList={friendsList}
          isFriendsModalOpen={isFriendsModalOpen}
          setFriendsModal={setFriendsModal}
        />
        <Flex align='center' justify='space-between' margin='0 0 21px 0'>
          <Flex gap='5px'>
            <Typography size='body_m'>{friendsList.length}</Typography>
            <Typography size='body_m'>{noun}</Typography>
          </Flex>
          <button onClick={() => setFriendsModal(true)}>
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
    <Card className={layoutStyles.sm_card}>
      <Flex direction='column' gap='24px'>
        <Typography size={'heading_s'} color={'greenBright'}>
          Friends
        </Typography>
        {friendsContainer}
      </Flex>
    </Card>
  );
};
