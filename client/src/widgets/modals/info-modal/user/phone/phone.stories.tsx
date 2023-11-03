import type { Meta } from '@storybook/react';
import { UserPhone } from './phone';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { generateMockUser } from '@/shared/lib/mock';

const meta: Meta<typeof UserPhone> = {
  title: 'widgets/modals/info/user/phone',
  component: UserPhone,
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
    <div style={{ height: '100vh' }}>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        Open Third Modal
      </Button>
      <UserPhone user={user} isOpenModal={openModal} handleClose={closeModalNew} />
    </div>
  );
};
