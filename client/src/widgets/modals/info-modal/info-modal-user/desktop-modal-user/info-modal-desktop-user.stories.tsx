import type { Meta } from '@storybook/react';
import { UserPreviewModal } from './user-modal';
import { Button } from '@/shared/ui';
import { user } from '@/widgets/modals/mocks/user-mock';
import { useState } from 'react';

const meta: Meta<typeof UserPreviewModal> = {
  title: 'widgets/Info-Modal-Desktop-User',
  component: UserPreviewModal,
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
      <UserPreviewModal user={user} isOpenModal={openModal} handleClose={closeModalNew} />
    </div>
  );
};
