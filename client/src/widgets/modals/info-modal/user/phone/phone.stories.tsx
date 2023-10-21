import type { Meta } from '@storybook/react';
import { UserPhone } from './phone';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { userResponseFixture } from '@/shared/fixtures/user';

const meta: Meta<typeof UserPhone> = {
  title: 'widgets/Info-Modal-Phone-User',
  component: UserPhone,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const InfoModalUser_desktop = () => {
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
        Open Third Modal
      </Button>
      <UserPhone user={userResponseFixture} isOpenModal={openModal} handleClose={closeModalNew} />
    </div>
  );
};
