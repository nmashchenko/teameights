import { ArrowLeft, ArrowRight } from '@/shared/assets';
import { BadgeFramework, BadgeLanguage, Button, Drawer, Flex, Typography } from '@/shared/ui';
import { FC } from 'react';
import styles from './phone.module.scss';
import { calculateAge } from '@/shared/lib/utils/get-age/get-age';
import { InfoModalUserProps } from '../interfaces';
import { ImageLoader } from '@/shared/ui/image-loader/image-loader';

export const UserPhone: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
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
              <ArrowLeft />
              Back
            </Button>
            <Button typeBtn='tertiary' size='m' color='white' padding='0'>
              Profile
              <ArrowRight />
            </Button>
          </Flex>
          <Flex gap='24px' direction='column'>
            <Flex gap='32px' maxHeight='70px'>
              <ImageLoader
                shouldHaveCrown={false}
                width={70}
                height={70}
                src={user?.photo?.path || ''}
                alt='User image'
                borderRadius='50%'
              />
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
                  {user?.frameworks.map((framework: string, index: number) => (
                    <BadgeFramework data={framework} key={index} />
                  ))}
                </>
              )}
            </div>
            <Flex wrap='wrap' gap='8px'>
              {user?.programmingLanguages?.map((language: string, index: number) => (
                <BadgeLanguage data={language} key={index} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};
