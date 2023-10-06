import { FC, useEffect, useState } from 'react';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import styles from './info-modal.module.scss';
import { Typography, Button, Modal, Flex } from '@/shared/ui';
import TeamPersonBox from './team-person';
import { ArrowRight } from '@/shared/assets';
import { ITeam, IUserResponse } from 'teameights-types';

const mockNavigate = (path: string) => {
  console.log(`navigate to ${path}`);
};

interface TeamPreviewModalProps {
  team: ITeam;
  user: IUserResponse;
  isOpenModal: boolean;
  handleClose: () => void;
  handleJoin: () => void;
}

export const TeamPreviewModal: FC<TeamPreviewModalProps> = ({
  user,
  team,
  handleJoin,
  isOpenModal,
  handleClose,
}) => {
  const [imgLoading, setImgLoading] = useState(true);
  const [usersTeam, setUsersTeam] = useState('');

  const members = team?.members;
  const teammates = members?.slice(1, members.length);
  const navigate = mockNavigate;

  useEffect(() => {
    if (user?.team && user.team.length > 0 && user.team[0].id !== team?.id) {
      setUsersTeam('Join');
    }
    // if (user?.team === undefined || user?.team[0].id !== team?.id) {
    //   setUsersTeam('Join');
    // }
    // const teamid = user?.team?[0].id;
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
            <div className={imgLoading ? styles.visible_container : styles.hidden_container}>
              <Skeleton width='70px' height='70px' borderRadius='50%' />
            </div>
            <div className={imgLoading ? styles.hidden_container : styles.visible_container}>
              <div className={styles.team_card_top_icon}>
                <img src={team?.image} alt="Team's image" onLoad={() => setImgLoading(false)} />
              </div>
            </div>

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
          {team?.description && <div className={styles.team_card_desc}>{team?.description}</div>}
          <Flex gap='36px' maxHeight='50px' direction='row'>
            <div>
              <TeamPersonBox
                src={team?.leader.photo?.path || ''}
                shouldLoadImage={true}
                shouldHaveCrown={true}
              />
            </div>
            <div>
              {teammates ? (
                <Flex gap='8px'>
                  {[...Array(7)].map((_, index) => {
                    if (index < teammates.length) {
                      return (
                        <TeamPersonBox
                          key={index}
                          src={teammates[index].photo?.path || ''}
                          shouldLoadImage={true}
                          shouldHaveCrown={false}
                        />
                      );
                    } else {
                      return (
                        <TeamPersonBox
                          key={index}
                          src='unregisteredImg'
                          shouldHaveCrown={false}
                          shouldLoadImage={false}
                        />
                      );
                    }
                  })}
                </Flex>
              ) : null}
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
