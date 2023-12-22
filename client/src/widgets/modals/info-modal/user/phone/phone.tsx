import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import { BadgeText, BadgeIcon, Button, Drawer, Flex, Typography } from '@/shared/ui';
import { FC } from 'react';
import styles from './phone.module.scss';
import { calculateAge, getCountryFlag } from '@/shared/lib';
import { InfoModalUserProps } from '../interfaces';
import { ImageLoader } from '@/shared/ui/image-loader/image-loader';

export const UserPhone: FC<InfoModalUserProps> = ({ user, isOpenModal, handleClose }) => {
  const age = user?.dateOfBirth ? calculateAge(user.dateOfBirth) : null;
  // const showInviteButton = () => {
  //   if (user?.team) {
  //     if (!user.team.members?.some(member => member.id === user.id)) {
  //       return true;
  //     }
  //   }
  //
  //   return false;
  // };

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
                src={user?.photo?.path || ''}
                alt='User image'
                borderRadius='50%'
              />
              <Flex direction='column' maxHeight='70px'>
                <Flex direction='column' gap='8px'>
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
                  <Flex direction='column' gap='4px'>
                    <Typography size='body_s' color='greyNormal'>
                      {user?.speciality}
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
                </Button>
              }
              <Button typeBtn='secondary' size='m' width='100%'>
                Message
              </Button>
            </Flex>
          </Flex>
          <Typography size='body_m' color='white'>
            {user?.description}
          </Typography>
          <Flex gap='24px' direction='column'>
            {/*User is developer:*/}
            {user?.skills?.frameworks && (
              <div className={styles.grid_container}>
                {user?.skills?.frameworks.map((framework: string, index: number) => (
                  <BadgeText data={framework} key={index} />
                ))}
              </div>
            )}
            {/*User is designer:*/}
            {user?.skills?.fields && (
              <div className={styles.grid_container}>
                {user?.skills?.fields.map((field: string, index: number) => (
                  <BadgeText data={field} key={index} />
                ))}
              </div>
            )}
            {/*User is project manager:*/}
            {user?.skills?.methodologies && (
              <div className={styles.grid_container}>
                {user?.skills?.methodologies.map((methodology: string, index: number) => (
                  <BadgeText data={methodology} key={index} />
                ))}
              </div>
            )}

            {/*User is developer:*/}
            {user?.skills?.programmingLanguages && (
              <Flex wrap='wrap' gap='8px'>
                {user?.skills.programmingLanguages.map((language: string, index: number) => (
                  <BadgeIcon data={language} key={index} />
                ))}
              </Flex>
            )}
            {/*User is designer:*/}
            {user?.skills?.designerTools && (
              <Flex wrap='wrap' gap='8px'>
                {user?.skills.designerTools.map((tool: string, index: number) => (
                  <BadgeIcon data={tool} key={index} />
                ))}
              </Flex>
            )}

            {/*User is project manager:*/}
            {user?.skills?.projectManagerTools && (
              <Flex wrap='wrap' gap='8px'>
                {user?.skills.projectManagerTools.map((tool: string, index: number) => (
                  <BadgeIcon data={tool} key={index} />
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};
