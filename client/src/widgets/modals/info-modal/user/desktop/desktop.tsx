import {
  BadgeFramework,
  BadgeLanguage,
  Button,
  Modal,
  Typography,
  Flex,
  ImageLoader,
} from '@/shared/ui';
import styles from './desktop.module.scss';
import { FC } from 'react';
import { ArrowRight, UserPlus, ChatCircleDots } from '@/shared/assets';
import { calculateAge, getCountryFlag } from '@/shared/lib';
import { InfoModalUserProps } from '../interfaces';

export const UserDesktop: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;
  const showInviteButton = () => {
    if (user?.team) {
      if (!user.team.members?.some(member => member.id === user.id)) {
        return true;
      }
    }

    return false;
  };
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='m'>
        <Flex gap='24px' direction='column'>
          <Flex gap='32px' maxHeight='70px'>
            <ImageLoader
              crownSize={28}
              width={70}
              height={70}
              src={user?.photo?.path || ''}
              alt='User image'
              borderRadius='50%'
            />
            <Flex gap='8px' direction='column'>
              <Flex gap='8px' align='center'>
                <Typography size='heading_s'>
                  {user?.fullName.split(' ')[0]}, {age}
                </Typography>
                <ImageLoader
                  width={24}
                  height={16}
                  src={getCountryFlag(user?.country)}
                  alt='User flag image'
                />
              </Flex>

              <Flex gap='4px' direction='column'>
                <Typography size='body_s' color='greyNormal'>
                  {user?.concentration}
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
          {user?.frameworks && (
            <div className={styles.grid_container}>
              {user?.frameworks.map((framework, index) => (
                <BadgeFramework data={framework} key={index} />
              ))}
            </div>
          )}
          {user?.programmingLanguages && (
            <Flex wrap='wrap' gap='8px'>
              {user?.programmingLanguages.map((language, index) => (
                <BadgeLanguage data={language} key={index} />
              ))}
            </Flex>
          )}
          <Flex justify='space-between' align='center' margin='24px 0 0 0'>
            <Flex gap='8px'>
              {showInviteButton() && (
                <Button typeBtn='primary' size='m' width='100px'>
                  Invite
                  <UserPlus />
                </Button>
              )}

              <Button typeBtn='secondary' size='m' width='124px'>
                Message
                <ChatCircleDots />
              </Button>
            </Flex>

            <Button typeBtn='tertiary' size='m' color='white' padding='0'>
              Profile
              <ArrowRight />
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
