import { BadgeFramework, BadgeLanguage, Button, Modal, Typography, Flex } from '@/shared/ui';
import styles from './user-modal.module.scss';
import { useState, FC } from 'react';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { IUserResponse } from 'teameights-types';
import { ArrowRight } from '@/shared/assets';
import { calculateAge } from '@/shared/lib/utils/get-age/get-age';

interface UserPreviewModalProps {
  user: IUserResponse;
  isOpenModal: boolean;
  handleClose: () => void;
}

export const UserPreviewModal: FC<UserPreviewModalProps> = ({ user, isOpenModal, handleClose }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='m'>
        <Flex gap='24px' direction='column'>
          <Flex gap='32px' maxHeight='70px'>
            <div className={imgLoading ? styles.visible_container : styles.hidden_container}>
              <Skeleton width='70px' height='70px' borderRadius='50%' />
            </div>
            <div className={imgLoading ? styles.hidden_container : styles.visible_container}>
              <div className={styles.user_card_top_icon}>
                <img
                  src={user?.photo?.path || ''}
                  alt="User's image"
                  onLoad={() => setImgLoading(false)}
                />
              </div>
            </div>
            <Flex gap='8px' direction='column'>
              <Typography size='heading_s' color='white'>
                {user?.username}, {age}
              </Typography>
              <Flex gap='4px' direction='column'>
                <Typography size='body_s' color='greyNormal'>
                  {`${
                    user?.concentration
                      ? user.concentration.charAt(0).toUpperCase() + user.concentration.slice(1)
                      : ''
                  }
                `}
                </Typography>
                <Typography size='body_s' color='greyNormal'>
                  {user?.experience}
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
            <Flex wrap='wrap' gap='8px'>
              {user?.frameworks.map((framework, index) => (
                <BadgeFramework data={framework} key={index} maxWidth='120px' />
              ))}
            </Flex>
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
              <Button typeBtn='primary' size='m' width='100px'>
                Invite
              </Button>

              <Button typeBtn='secondary' size='m' width='124px'>
                Message
              </Button>
            </Flex>

            <Button typeBtn='tertiary' size='m' color='white'>
              Profile
              <ArrowRight />
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
