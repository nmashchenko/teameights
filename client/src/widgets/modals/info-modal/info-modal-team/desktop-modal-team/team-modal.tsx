import { FC, useEffect, useState } from 'react';
import styles from './team-modal.module.scss';
import { Typography, Button, Modal, Flex } from '@/shared/ui';
import TeamPersonBox from './team-person';
import { ArrowRight } from '@/shared/assets';
import { InfoModalTeamProps } from '../interfaces';
import { IUserResponse } from '@teameights/types';
import { ImageLoader } from '../../image-loader';

const mockNavigate = (path: string) => {
  console.log(`navigate to ${path}`);
};

export const TeamPreviewModal: FC<InfoModalTeamProps> = ({
  user,
  team,
  handleJoin,
  isOpenModal,
  handleClose,
}) => {
  // const [imgLoading, setImgLoading] = useState(true);
  const [usersTeam, setUsersTeam] = useState('');

  const members = team?.members;
  const teammates = members?.slice(1, members.length);
  const navigate = mockNavigate;

  useEffect(() => {
    if (user?.team && user.team.length > 0 && user.team[0].id !== team?.id) {
      setUsersTeam('Join');
    }

    const teamid = user?.team && user.team.length > 0 ? user.team[0].id : undefined;
    if (team?.id === teamid) {
      setUsersTeam('Your');
    }
  }, [user, team]);

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='l'>
        <Flex direction='column' gap='24px'>
          <Flex gap='16px' maxHeight='70px'>
            <ImageLoader imgLoading={true} shouldHaveCrown={false} imageSize='70px' />

            <Flex align='center'>
              <Flex direction='column' gap='8px'>
                <Typography size='heading_s' color='white'>
                  {team?.name}
                </Typography>
                <Flex gap='5px'>
                  <Typography size='body_s' color='greyNormal'>
                    {`${
                      team?.type.charAt(0).toUpperCase() + team?.type.slice(1)
                    } Type, ${team?.country}`}
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
            <div>
              <TeamPersonBox
                src={team?.leader.photo?.path || ''}
                shouldLoadImage={true}
                shouldHaveCrown={true}
              />
            </div>
            <div>
              {/* {console.log(teammates.length)} */}
              {teammates && teammates.length > 0 && teammates.length <= 7 && (
                <Flex gap='8px'>
                  {teammates.map((teammate: IUserResponse, index: number) => (
                    <TeamPersonBox
                      key={index}
                      src={teammate.photo?.path || 'unregisteredImg'}
                      shouldLoadImage={true}
                      shouldHaveCrown={false}
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
              disabled={usersTeam === 'Your'}
              onClick={handleJoin}
            >
              Join Team
            </Button>

            <Button
              color='white'
              size='m'
              typeBtn='tertiary'
              onClick={() => navigate('/team/' + team?.id)}
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
