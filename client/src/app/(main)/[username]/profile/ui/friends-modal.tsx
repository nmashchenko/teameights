import { Flex, ImageLoader, Typography } from '@/shared/ui';
import styles from './friends.module.scss';
import { Modal } from '@/shared/ui';
import { getCountryFlag } from '@/shared/lib';
import { IUserBase } from '@teameights/types';

interface FriendsModalProps {
  friendsList: IUserBase[];
  isFriendsModalOpen: boolean;
  setFriendsModal: (state: boolean) => void;
}

export const FriendsModal = ({
  friendsList,
  isFriendsModalOpen,
  setFriendsModal,
}: FriendsModalProps) => {
  return (
    <Modal onClose={() => setFriendsModal(false)} isOpen={isFriendsModalOpen}>
      <Flex gap='28px' direction='column'>
        <Typography color='greenBright' size='heading_s'>
          Friends
        </Typography>
        <Flex className={styles.friends_list} maxHeight='314px' direction='column' gap='16px'>
          {friendsList.map(friend => {
            return (
              <a href={`/${friend.username}/profile`} key={friend.id}>
                <Flex className={styles.friends_list_item} align='center' justify='space-between'>
                  <Flex align='center' gap='12px'>
                    <ImageLoader
                      width={50}
                      height={50}
                      className={styles.avatar}
                      borderRadius={'50%'}
                      crownSize={friend.isLeader ? 20 : undefined}
                      src={String(friend.photo?.path ?? '/images/placeholder.png')}
                      alt={friend.username ?? 'Profile image'}
                    />
                    <Flex gap='4px' align='center'>
                      <Typography>{friend.username ?? 'usernamehey'}</Typography>
                      <ImageLoader
                        width={24}
                        height={16}
                        src={getCountryFlag(friend?.country) ?? '/images/placeholder.png'}
                        alt='User flag image'
                      />
                    </Flex>
                  </Flex>
                  <Typography size='body_s' color='greyNormal'>
                    {friend.skills?.speciality}
                  </Typography>
                </Flex>
              </a>
            );
          })}
        </Flex>
      </Flex>
    </Modal>
  );
};
