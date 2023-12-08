import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import { Button, Drawer, Flex, Typography } from '@/shared/ui';
import { FC } from 'react';
import styles from './phone.module.scss';
import { InfoModalTeamProps } from '../interfaces';
import { ImageLoader } from '@/shared/ui/image-loader/image-loader';
import { capitalize, getCountryFlag } from '@/shared/lib';

export const TeamPhone: FC<InfoModalTeamProps> = ({
  team,
  user,
  isOpenModal,
  handleJoin,
  handleClose,
}) => {
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
            <Flex gap='16px' align='center' maxHeight='70px'>
              <ImageLoader
                width={70}
                height={70}
                src={team?.photo?.path || ''}
                alt='Team image'
                borderRadius='50%'
              />
              <Flex direction='column' maxHeight='70px' gap='8px'>
                <Flex gap='8px' align='center' maxHeight='30px'>
                  <Typography size='heading_s' color='white'>
                    {team?.name}
                  </Typography>
                </Flex>
                <Flex gap='4px' align='center'>
                  <Typography size='body_s' color='greyNormal'>
                    {capitalize(team?.type)} Type, {team?.country}
                  </Typography>
                  <ImageLoader
                    width={16}
                    height={10}
                    src={getCountryFlag(team?.country)}
                    alt='Team flag image'
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex justify='space-between' padding='0 8px' gap='24px'>
              <Typography size='body_m'>
                Tournaments: <span className={styles.span_text}>0</span>
              </Typography>
              <Typography size='body_m'>
                Wins: <span className={styles.span_text}>{team?.wins}</span>
              </Typography>
              <Typography size='body_m'>
                Points: <span className={styles.span_text}>{team?.points}</span>
              </Typography>
            </Flex>
            <Button
              typeBtn='primary'
              size='m'
              width='100%'
              disabled={team?.leader.id === user?.id}
              onClick={handleJoin}
            >
              {team?.leader.id === user?.id ? 'Your team' : 'Join team'}
            </Button>
          </Flex>
          <Flex padding='8px 0'>
            {team?.description && (
              <Typography size='body_m' color='white'>
                {team.description}
              </Typography>
            )}
          </Flex>
          <Flex direction='column' gap='16px'>
            <Flex align='center' gap='12px'>
              <ImageLoader
                crownSize={20}
                width={50}
                height={50}
                src={team?.leader?.photo?.path || ''}
                alt='Team leader image'
                borderRadius='50%'
              />
              <Flex direction='column' gap='4px'>
                <Flex gap='4px' align='center'>
                  <Typography size='body_m' color='white'>
                    {team?.leader?.username}
                  </Typography>
                  <ImageLoader
                    width={16}
                    height={10}
                    src={getCountryFlag(team?.country)}
                    alt='Team leader country image'
                  />
                </Flex>
                <Typography size='body_s' color='greyNormal'>
                  {team?.leader?.speciality}
                </Typography>
              </Flex>
            </Flex>
            {team?.members?.map((teammate, index) => (
              <Flex align='center' gap='12px' key={index}>
                <ImageLoader
                  width={50}
                  height={50}
                  src={teammate?.photo?.path || ''}
                  alt='Team member image'
                  borderRadius='50%'
                  key={index}
                />
                <Flex direction='column' gap='4px'>
                  <Flex gap='4px' align='center'>
                    <Typography size='body_m'>{teammate?.username}</Typography>
                    <ImageLoader
                      width={16}
                      height={10}
                      src={getCountryFlag(teammate?.country)}
                      alt='Team flag image'
                    />
                  </Flex>
                  <Typography size='body_s' color='greyNormal'>
                    {teammate?.speciality}
                  </Typography>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};
