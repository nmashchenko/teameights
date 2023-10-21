import { FC } from 'react';
import { InfoModalTeamProps } from './interfaces';
import { useGetScreenWidth } from '@/shared/lib';
import { TeamDesktop } from '../team/desktop/desktop';
import { TeamPhone } from '../team/phone/phone';
export const TeamInfoModal: FC<InfoModalTeamProps> = props => {
  const { team, user, isOpenModal, handleClose, handleJoin } = props;
  const width = useGetScreenWidth();

  return (
    <>
      {width > 600 ? (
        <TeamDesktop
          team={team}
          user={user}
          isOpenModal={isOpenModal}
          handleClose={handleClose}
          handleJoin={handleJoin}
        />
      ) : (
        <TeamPhone
          team={team}
          user={user}
          isOpenModal={isOpenModal}
          handleClose={handleClose}
          handleJoin={handleJoin}
        />
      )}
    </>
  );
};
