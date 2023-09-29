import { FC, useEffect, useState } from 'react';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import styles from './info-modal.module.scss';
import { Typography, Button, Modal } from '@/shared/ui';
import TeamPersonBox from './team-person';

interface TeamMember {
  image: string;
}

export interface Team {
  _id: string;
  name: string;
  type: string;
  country: string;
  image: string;
  members: TeamMember[];
  description?: string;
  wins: number;
  points: number;
  leader: {
    image: string;
    shouldHaveCrown: boolean;
  };
}

export interface User {
  team: {
    _id: string;
  };
}

function getCountryFlag(country: string): string {
  return `https://example.com/mock_country_flags/${country}.png`;
}

const mockNavigate = (path: string) => {
  console.log(`navigate to ${path}`);
};

interface TeamPreviewModalProps {
  team: Team;
  user: User;
  handleJoin: () => void;
}

export const TeamPreviewModal: FC<TeamPreviewModalProps> = ({ user, team, handleJoin }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const [usersTeam, setUsersTeam] = useState('');

  const members = team?.members;
  const teammates = members?.slice(1, members.length);
  const countryFlag = getCountryFlag(team.country);
  const navigate = mockNavigate;

  useEffect(() => {
    if (user?.team === undefined || user?.team._id !== team?._id) {
      setUsersTeam('Join');
    }
    const teamid = user?.team?._id;

    if (team?._id === teamid) {
      setUsersTeam('Your');
    }
  }, [user, team]);

  return (
    <>
      <Modal isOpen={true} size='l'>
        <div className={styles.modal_container}>
          <div className={styles.team_card_top}>
            <div className={`${styles.hidable_wrapper} ${imgLoading ? 'block' : 'none'}`}>
              <Skeleton width='75px' height='75px' borderRadius='50%' />
            </div>
            <div className={`${styles.hidable_wrapper} ${imgLoading ? 'none' : 'block'}`}>
              <div className={styles.team_card_top_icon}>
                <img src={team?.image} alt="Team's image" onLoad={() => setImgLoading(false)} />
              </div>
            </div>

            <div className={styles.team_card_top_info}>
              <div className={styles.column_container}>
                <Typography size='heading_s' color='white'>
                  {team?.name}
                </Typography>
                <div className={styles.type_country_flag_container}>
                  <Typography size='body_s' color='greyNormal'>
                    {`${
                      team?.type.charAt(0).toUpperCase() + team?.type.slice(1)
                    } Type, ${team?.country}`}
                  </Typography>
                  {countryFlag && (
                    <div className={styles.team_card_top_icon}>
                      <img
                        src={countryFlag}
                        width='25px'
                        height='25px'
                        style={{ borderRadius: '0%' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Продолжить, там идет TeamCardTop */}
          <div className={styles.team_card_body_point}>
            <div className={styles.statistics_flex}>
              <div className={styles.statistic}>
                <p>
                  Tournaments: <span>0</span>
                </p>
              </div>
              <div className={styles.statistic}>
                <p>
                  Wins: <span>{team?.wins}</span>
                </p>
              </div>
              <div className={styles.statistic}>
                <p>
                  Points: <span>{team.points}</span>
                </p>
              </div>
            </div>
          </div>
          {team?.description && (
            <div className={styles.team_card_body_point}>
              <div className={styles.team_card_desc}>{team?.description}</div>
            </div>
          )}
          <div className={styles.images_container}>
            <div>
              <TeamPersonBox
                src={team?.leader.image}
                shouldLoadImage={true}
                shouldHaveCrown={true}
              />
            </div>
            <div>
              <div className={styles.team_card_members}>
                {[...Array(7)].map((_, index) => {
                  if (index < teammates.length) {
                    return (
                      <TeamPersonBox
                        key={index}
                        src={teammates[index].image}
                        shouldLoadImage={true}
                        shouldHaveCrown={false}
                      />
                    );
                  } else {
                    // need to be added unregistered image
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
              </div>
            </div>
          </div>
          <div className={styles.buttons_container}>
            {/* needs to be fixed */}
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
              width='73px'
              typeBtn='tertiary'
              onClick={() => navigate('/team/' + team?._id)}
            >
              Profile
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
