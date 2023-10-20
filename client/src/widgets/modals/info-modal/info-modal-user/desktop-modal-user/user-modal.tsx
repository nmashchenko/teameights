import { BadgeFramework, BadgeLanguage, Button, Modal, Typography, Flex } from '@/shared/ui';
import styles from './user-modal.module.scss';
import { FC } from 'react';
import { ArrowRight } from '@/shared/assets';
import { calculateAge } from '@/shared/lib/utils/get-age/get-age';
import { InfoModalUserProps } from '../interfaces';
import { ImageLoader } from '../../image-loader';

export const UserPreviewModal: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
  // const [imgLoading, setImgLoading] = useState(true);
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='m'>
        <Flex gap='24px' direction='column'>
          <Flex gap='32px' maxHeight='70px'>
            <ImageLoader imgLoading={true} shouldHaveCrown={false} imageSize='70px' />
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
            <div className={styles.grid_container}>
              {user?.frameworks.map((framework: string, index: number) => (
                <BadgeFramework data={framework} key={index} />
              ))}
            </div>
          )}
          {user?.programmingLanguages && (
            <Flex wrap='wrap' gap='8px'>
              {user?.programmingLanguages.map((language: string, index: number) => (
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
