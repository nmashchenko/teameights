import { ArrowLeft, ArrowRight } from '@/shared/assets';
import { Button, Drawer, Flex, Typography } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { FC, useEffect, useState } from 'react';
import { ITeam, IUserResponse } from 'teameights-types';
import styles from './team-modal-phone.module.scss';
import TeamMember from './team-member';

interface TeamPreviewModalPhoneProps {
  team: ITeam;
  user: IUserResponse;
  isDrawerOpen: boolean;
  handleJoin: () => void;
  handleClose: () => void;
}

export const TeamPreviewModalPhone: FC<TeamPreviewModalPhoneProps> = ({
  team,
  user,
  isDrawerOpen,
  handleJoin,
  handleClose,
}) => {
  const [usersTeam, setUsersTeam] = useState('');
  const [imgLoading, setImgLoading] = useState(true);

  const members = team?.members;
  const teammates = members?.slice(1, members.length);

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
      <Drawer open={isDrawerOpen} onClose={handleClose} isFullHeight>
        <Flex justify='space-between' margin='24px 24px 32px 24px'>
          <Button typeBtn='tertiary' size='m' color='white' onClick={handleClose}>
            <ArrowLeft />
            Back
          </Button>
          <Button typeBtn='tertiary' size='m' color='white'>
            Profile
            <ArrowRight />
          </Button>
        </Flex>
        <Flex gap='24px' direction='column' margin='0px 24px 0px 24px'>
          <Flex gap='16px' align='center' maxHeight='70px'>
            <div className={imgLoading ? styles.visible_container : styles.hidden_container}>
              <Skeleton width='70px' height='70px' borderRadius='50%' />
            </div>
            <div className={imgLoading ? styles.hidden_container : styles.visible_container}>
              <div className={styles.team_card_top_icon}>
                <img src={team?.image} alt="Team's image" onLoad={() => setImgLoading(false)} />
              </div>
            </div>
            <Flex direction='column' maxHeight='70px'>
              <Flex gap='8px' align='center' maxHeight='30px'>
                <Typography size='heading_s' color='white'>
                  {team.name}
                  {/* logic for country flag */}
                </Typography>
              </Flex>
              <Typography size='body_s' color='greyNormal'>
                {team?.type?.charAt(0).toUpperCase() + team?.type?.slice(1)} Type, {team.country}
              </Typography>
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
              Points: <span className={styles.span_text}>{team.points}</span>
            </Typography>
          </Flex>
          <Button typeBtn='primary' size='m' width='100%' onClick={handleJoin}>
            {usersTeam} Team
          </Button>
          <Flex padding='8px 0'>
            {team?.description && (
              <Typography size='body_m' color='white'>
                {team.description}
              </Typography>
            )}
          </Flex>
        </Flex>
        <Flex direction='column' gap='16px' margin='32px 24px 0 24px'>
          <Flex align='center' gap='12px'>
            <TeamMember src={team?.leader?.photo?.path || ''} shouldHaveCrown={true} />
            <Flex direction='column' gap='4px'>
              <Typography size='body_m' color='white'>
                {team?.leader?.username ?? 'undefined'}
              </Typography>
              <Typography size='body_s' color='greyNormal'>
                {team?.leader?.concentration ?? 'undefined'}
              </Typography>
            </Flex>
          </Flex>
          {teammates?.map((teammate, index) => (
            <Flex align='center' gap='12px' key={index}>
              <TeamMember src={teammate?.photo?.path || ''} shouldHaveCrown={false} />
              <Flex direction='column' gap='4px'>
                <Typography size='body_m' color='white'>
                  {teammate?.username ?? 'undefined'}
                </Typography>
                <Typography size='body_s' color='greyNormal'>
                  {teammate?.concentration ?? 'undefined'}
                </Typography>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Drawer>
    </>
  );
};

{
  /* <TeamMember src={team?.leader?.photo?.path || ''} shouldHaveCrown={true} /> */
}

{
  /* <Flex gap='8px' align='baseline'>
<Typography size='body_m' color='white'>
  <TeamMember 
  src
  />
</Typography>
</Flex> */
}
//              src={teammate?.photo?.path || ''}
