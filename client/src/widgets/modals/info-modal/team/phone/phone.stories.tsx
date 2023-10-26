import type { Meta } from '@storybook/react';
import { TeamPhone } from './phone';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { userResponseFixture } from '@/shared/fixtures/user';
import { teamFixture } from '@/shared/fixtures/team';

const meta: Meta<typeof TeamPhone> = {
  title: 'widgets/modals/info/team/phone',
  component: TeamPhone,
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
    <div style={{ height: '100vh' }}>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        Open Modal Team
      </Button>
      <TeamPhone
        team={teamFixture}
        user={userResponseFixture}
        isOpenModal={openModal}
        handleClose={closeModalNew}
        handleJoin={handleJoin}
      />
    </div>
  );
};
