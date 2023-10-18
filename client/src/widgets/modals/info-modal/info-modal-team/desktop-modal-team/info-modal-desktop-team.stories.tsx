import type { Meta } from '@storybook/react';
import { TeamPreviewModal } from './team-modal';
import { Button } from '@/shared/ui';
import { team } from '@/widgets/modals/mocks/team-mock';
import { user } from '@/widgets/modals/mocks/user-mock';
import { useState } from 'react';

const meta: Meta<typeof TeamPreviewModal> = {
  title: 'widgets/Info-Modal-Desktop-Team',
  component: TeamPreviewModal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const handleJoin = () => {
  console.log('Join button clicked');
};

export const InfoModalTeam_desktop = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalNew = () => {
    setOpenModal(true);
  };
  const closeModalNew = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        Open Modal Team
      </Button>
      <TeamPreviewModal
        team={team}
        user={user}
        isOpenModal={openModal}
        handleClose={closeModalNew}
        handleJoin={handleJoin}
      />
    </div>
  );
};
