import type { Meta } from '@storybook/react';
import { UserPreviewPhone } from './user-profile-phone';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { user } from '@/widgets/modals/mocks/user-mock';

const meta: Meta<typeof UserPreviewPhone> = {
  title: 'widgets/Info-Modal-Phone-User',
  component: UserPreviewPhone,
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
      <UserPreviewPhone user={user} isOpenModal={openModal} handleClose={closeModalNew} />
    </div>
  );
};
