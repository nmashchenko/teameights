import type { Meta } from '@storybook/react';
import { Desktop } from './desktop';
import { useState } from 'react';
import { Button } from '@/shared/ui';

const meta: Meta<typeof Desktop> = {
  title: 'widgets/Action-Modal-Desktop',
  component: Desktop,
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
      <Desktop
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
      </Desktop>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        First Modal
      </Button>
    </div>
  );
};
