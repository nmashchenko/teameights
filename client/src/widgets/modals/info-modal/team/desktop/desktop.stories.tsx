import type { Meta } from '@storybook/react';
import { TeamDesktop } from './desktop';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import { generateMockTeam, generateMockUser } from '@/shared/lib/mock';

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
  const team = generateMockTeam();
  const user = generateMockUser();
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
        team={team}
        user={user}
        isOpenModal={openModal}
        handleClose={closeModalNew}
        handleJoin={handleJoin}
      />
    </div>
  );
};
