import { ArrowLeft, ArrowRight } from '@/shared/assets';
import { BadgeFramework, BadgeLanguage, Button, Drawer, Flex, Typography } from '@/shared/ui';
import { FC, useState } from 'react';
import styles from './user-profile-phone.module.scss';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { calculateAge } from '@/shared/lib/utils/get-age/get-age';
import { InfoModalUserProps } from '../interfaces';

export const UserPreviewPhone: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;

  const showInviteButton = () => {
    if (user?.team) {
      if (!user.team.some(team => team.members?.some(member => member.id === user?.id))) {
        return true;
      }
    }

    return false;
  };

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
            <Button typeBtn='tertiary' size='m' color='white' onClick={handleClose}>
              <ArrowLeft />
              Back
            </Button>
            <Button typeBtn='tertiary' size='m' color='white'>
              Profile
              <ArrowRight />
            </Button>
          </Flex>
          <Flex gap='24px' direction='column'>
            <Flex gap='32px' maxHeight='70px'>
              <div className={imgLoading ? styles.visible_container : styles.hidden_container}>
                <Skeleton width='70px' height='70px' borderRadius='50%' />
              </div>
              <div className={imgLoading ? styles.hidden_container : styles.visible_container}>
                <div className={styles.user_img}>
                  <img
                    src={user?.photo?.path || ''}
                    alt="User's image"
                    onLoad={() => setImgLoading(false)}
                  />
                </div>
              </div>
              <Flex direction='column' maxHeight='70px'>
                <Flex direction='column' gap='8px'>
                  <Typography size='heading_s' color='white'>
                    {user?.username?.split(' ')[0]}, {age}
                  </Typography>
                  {/* getCountryLogic */}
                  <Flex direction='column' gap='4px'>
                    <Typography size='body_s' color='greyNormal'>
                      {user?.concentration}
                    </Typography>
                    <Typography size='body_s' color='greyNormal'>
                      {user?.experience}
                    </Typography>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex gap='8px' width='100%'>
              {showInviteButton() && (
                <Button typeBtn='primary' size='m' width='100%'>
                  Invite
                </Button>
              )}
              <Button typeBtn='secondary' size='m' width='100%'>
                Message
              </Button>
            </Flex>
          </Flex>
          <Typography size='body_m' color='white'>
            {user?.description}
          </Typography>
          <Flex gap='24px' direction='column'>
            <div className={styles.grid_container}>
              {user?.frameworks && (
                <>
                  {user?.frameworks.map((framework, index) => (
                    <BadgeFramework data={framework} key={index} />
                  ))}
                </>
              )}
            </div>
            <Flex wrap='wrap' gap='8px'>
              {user?.programmingLanguages?.map((language, index) => (
                <BadgeLanguage data={language} key={index} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};
