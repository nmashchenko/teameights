import type { Meta } from '@storybook/react';
import { UserDesktop } from './desktop';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import { generateMockUser } from '@/shared/lib/mock';

const meta: Meta<typeof UserDesktop> = {
  title: 'widgets/modals/info/user/desktop',
  component: UserDesktop,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const InfoModalUser_desktop = () => {
  const [openModal, setOpenModal] = useState(false);
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
        Open Third Modal
      </Button>
      <UserDesktop user={user} isOpenModal={openModal} handleClose={closeModalNew} />
    </div>
  );
};
