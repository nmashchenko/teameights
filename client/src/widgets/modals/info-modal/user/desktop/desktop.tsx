import { Button, Modal, Typography, Flex, ImageLoader } from '@/shared/ui';
import { FC } from 'react';
import { ArrowRightIcon, ChatCircleDotsIcon } from '@/shared/assets';
import { calculateAge, getCountryFlag } from '@/shared/lib';
import { InfoModalUserProps } from '../interfaces';
import { IconLayout } from '../ui/icon-layout/icon-layout';
import { TextLayout } from '../ui/text-layout/text-layout';
import { FriendButton } from '@/features/friend-button';
import { useGetMe } from '@/entities/session';

export const UserDesktop: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;
  const { data: me } = useGetMe();

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='m'>
        <Flex gap='24px' direction='column'>
          <Flex gap='32px' maxHeight='70px'>
            <ImageLoader
              crownSize={28}
              width={70}
              height={70}
              src={user?.photo?.path ?? '/images/placeholder.png'}
              alt='User image'
              borderRadius='50%'
            />
            <Flex gap='8px' direction='column'>
              <Flex gap='8px' align='center'>
                <Typography size='heading_s'>
                  {user?.fullName?.split(' ')[0]}, {age}
                </Typography>
                <ImageLoader
                  width={24}
                  height={16}
                  src={getCountryFlag(user?.country) ?? '/images/placeholder.png'}
                  alt='User flag image'
                />
              </Flex>

              <Flex gap='4px' direction='column'>
                <Typography size='body_s' color='greyNormal'>
                  {user?.skills?.speciality}
                </Typography>
                <Typography size='body_s' color='greyNormal'>
                  {user?.experience} of experience
                </Typography>
              </Flex>
            </Flex>
          </Flex>
          {user?.description && (
            <Typography size='body_m' color='white'>
              {user?.description}
            </Typography>
          )}
          <TextLayout additionalTools={user?.skills?.additionalTools} />
          <IconLayout coreTools={user?.skills?.coreTools} />
          <Flex justify='space-between' align='center' margin='24px 0 0 0'>
            <Flex gap='8px'>
              {user?.id && <FriendButton myId={me?.id} userId={user.id} />}

              <Button typeBtn='secondary' size='m'>
                Message
                <ChatCircleDotsIcon />
              </Button>
            </Flex>

            <Button typeBtn='tertiary' size='m' color='white' padding='0'>
              Profile
              <ArrowRightIcon />
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
