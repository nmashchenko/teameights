import type { Meta } from '@storybook/react';
import { ActionModalDesktop } from './action-modal-desktop';
import { useState } from 'react';
import { Button } from '@/shared/ui';

const meta: Meta<typeof ActionModalDesktop> = {
  title: 'widgets/Action-Modal-Desktop',
  component: ActionModalDesktop,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const ActionModal_desktop = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalNew = () => {
    setOpenModal(true);
  };
  const closeModalNew = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <ActionModalDesktop
        heading='Removing member'
        sub='Are you sure you want to remove member from team?'
        isOpen={openModal}
        handleClose={closeModalNew}
      >
        <Button typeBtn='danger' color='white' size='m' onClick={openModalNew}>
          Delete
        </Button>
        <Button typeBtn='primary' color='white' size='m' onClick={closeModalNew}>
          Cancel
        </Button>
      </ActionModalDesktop>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        First Modal
      </Button>
    </div>
  );
};
