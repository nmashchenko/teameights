import type { Meta } from '@storybook/react';
import { UserDesktop } from './desktop';
import { Button } from '@/shared/ui';
import { userResponseFixture } from '@/shared/fixtures/user';
import { useState } from 'react';

const meta: Meta<typeof UserDesktop> = {
  title: 'widgets/Info-Modal-Desktop-User',
  component: UserDesktop,
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
    <div>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        Open Third Modal
      </Button>
      <UserDesktop user={userResponseFixture} isOpenModal={openModal} handleClose={closeModalNew} />
    </div>
  );
};
