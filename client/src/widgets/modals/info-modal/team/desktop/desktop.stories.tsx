import type { Meta } from '@storybook/react';
import { TeamDesktop } from './desktop';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import { userResponseFixture } from '@/shared/fixtures/user';
import { teamFixture } from '@/shared/fixtures/team';

const meta: Meta<typeof TeamDesktop> = {
  title: 'widgets/modals/info/team/desktop',
  component: TeamDesktop,
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
      <TeamDesktop
        team={teamFixture}
        user={userResponseFixture}
        isOpenModal={openModal}
        handleClose={closeModalNew}
        handleJoin={handleJoin}
      />
    </div>
  );
};
