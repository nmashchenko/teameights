import { ArrowLeftIcon, ArrowRightIcon, ChatCircleDotsIcon, UserPlusIcon } from '@/shared/assets';
import { Button, Drawer, Flex, Typography } from '@/shared/ui';
import { FC } from 'react';
import styles from './phone.module.scss';
import { calculateAge, getCountryFlag } from '@/shared/lib';
import { InfoModalUserProps } from '../interfaces';
import { ImageLoader } from '@/shared/ui/image-loader/image-loader';
import { IconLayout } from '../ui/icon-layout/icon-layout';
import { TextLayout } from '../ui/text-layout/text-layout';

export const UserPhone: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;

  return (
    <>
      <Drawer open={isOpenModal} onClose={handleClose} isFullHeight>
        <Flex
          padding='24px'
          className={styles.container}
          height='100%'
          direction='column'
          gap='32px'
        >
          <Flex justify='space-between'>
            <Button typeBtn='tertiary' size='m' color='white' onClick={handleClose} padding='0'>
              <ArrowLeftIcon />
              Back
            </Button>
            <Button typeBtn='tertiary' size='m' color='white' padding='0'>
              Profile
              <ArrowRightIcon />
            </Button>
          </Flex>
          <Flex gap='24px' direction='column'>
            <Flex gap='32px' maxHeight='70px'>
              <ImageLoader
                crownSize={28}
                width={70}
                height={70}
                src={user?.photo?.path || '/images/placeholder.png'}
                alt='User image'
                borderRadius='50%'
              />
              <Flex direction='column' maxHeight='70px'>
                <Flex direction='column' gap='8px'>
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
                  <Flex direction='column' gap='4px'>
                    <Typography size='body_s' color='greyNormal'>
                      {user?.skills?.speciality}
                    </Typography>
                    <Typography size='body_s' color='greyNormal'>
                      {user?.experience}
                    </Typography>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex gap='8px' width='100%'>
              {
                <Button typeBtn='primary' size='m' width='100%'>
                  Connect
                  <UserPlusIcon />
                </Button>
              }
              <Button typeBtn='secondary' size='m' width='100%'>
                Message
                <ChatCircleDotsIcon />
              </Button>
            </Flex>
          </Flex>
          <Typography size='body_m' color='white'>
            {user?.description}
          </Typography>
          <TextLayout additionalTools={user?.skills?.additionalTools} />
          <IconLayout coreTools={user?.skills?.coreTools} />
        </Flex>
      </Drawer>
    </>
  );
};
