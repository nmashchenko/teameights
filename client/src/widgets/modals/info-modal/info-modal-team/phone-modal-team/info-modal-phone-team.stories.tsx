import type { Meta } from '@storybook/react';
import { TeamPreviewModalPhone } from './team-modal-phone';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { user } from '@/widgets/modals/mocks/user-mock';
import { team } from '@/widgets/modals/mocks/team-mock';

const meta: Meta<typeof TeamPreviewModalPhone> = {
  title: 'widgets/Info-Modal-Phone-Team',
  component: TeamPreviewModalPhone,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const handleJoin = () => {
  console.log('Join button clicked');
};

export const InfoModalTeam_phone = () => {
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
      <TeamPreviewModalPhone
        team={team}
        user={user}
        isOpenModal={openModal}
        handleClose={closeModalNew}
        handleJoin={handleJoin}
      />
    </div>
  );
};
