import { FC } from 'react';
import styles from './desktop.module.scss';
import { Typography, Button, Modal, Flex } from '@/shared/ui';
import { ArrowRight } from '@/shared/assets';
import { InfoModalTeamProps } from '../interfaces';
import { ImageLoader } from '@/shared/ui/image-loader/image-loader';

const mockNavigate = (path: string) => {
  console.log(`navigate to ${path}`);
};

export const TeamDesktop: FC<InfoModalTeamProps> = ({
  user,
  team,
  handleJoin,
  isOpenModal,
  handleClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='l'>
        <Flex direction='column' gap='24px'>
          <Flex gap='16px' maxHeight='70px'>
            <ImageLoader
              shouldHaveCrown={false}
              imageSize='70px'
              src={team?.photo?.path || ''}
              alt='Team image'
              borderRadius='50%'
            />

            <Flex align='center'>
              <Flex direction='column' gap='8px'>
                <Typography size='heading_s' color='white'>
                  {team?.name}
                </Typography>
                <Flex gap='5px'>
                  <Typography size='body_s' color='greyNormal'>
                    {team?.type.toUpperCase()}, {team?.country}
                  </Typography>
                  {/* there must be logic to the country's flag */}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap='48px' direction='row'>
            <Typography size='body_m'>
              Tournaments: <span className={styles.span_text}>0</span>
            </Typography>
            <Typography size='body_m'>
              Wins: <span className={styles.span_text}>{team?.wins}</span>
            </Typography>
            <Typography size='body_m'>
              Points: <span className={styles.span_text}>{team.points}</span>
            </Typography>
          </Flex>
          {team?.description && (
            <Typography size='body_m' color='white'>
              {team?.description}
            </Typography>
          )}
          <Flex gap='36px' maxHeight='50px' direction='row'>
            <ImageLoader
              shouldHaveCrown={false}
              imageSize='50px'
              src={team.leader?.photo?.path || ''}
              alt='Team image'
              borderRadius='50%'
            />
            <div>
              {team.members.length && (
                <Flex gap='8px'>
                  {team.members.map((teammate, index) => (
                    <ImageLoader
                      shouldHaveCrown={false}
                      imageSize='50px'
                      src={teammate?.photo?.path || ''}
                      alt='Team image'
                      borderRadius='50%'
                      key={index}
                    />
                  ))}
                </Flex>
              )}
            </div>
          </Flex>
          <Flex width='100%' justify='space-between' align='center' margin='24px 0 0 0'>
            <Button
              typeBtn='primary'
              size='m'
              width='109px'
              disabled={team.leader.id === user.id}
              onClick={handleJoin}
            >
              {team.leader.id === user.id ? 'Your team' : 'Join team'}
            </Button>

            <Button
              color='white'
              size='m'
              typeBtn='tertiary'
              onClick={() => mockNavigate('/team/' + team?.id)}
              padding='0'
            >
              Profile
              <ArrowRight />
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
