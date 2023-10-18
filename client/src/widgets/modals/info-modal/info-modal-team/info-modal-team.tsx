import { FC } from 'react';
import { InfoModalTeamProps } from './interfaces';
import { useGetScreenWidth } from '@/shared/lib';
import { TeamPreviewModal } from './desktop-modal-team/team-modal';
import { TeamPreviewModalPhone } from './phone-modal-team/team-modal-phone';

export const InfoModalTeam: FC<InfoModalTeamProps> = props => {
  const { team, user, isOpenModal, handleClose, handleJoin } = props;
  const width = useGetScreenWidth();

  return (
    <>
      {width > 600 ? (
        <TeamPreviewModal
          team={team}
          user={user}
          isOpenModal={isOpenModal}
          handleClose={handleClose}
          handleJoin={handleJoin}
        />
      ) : (
        <TeamPreviewModalPhone
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
