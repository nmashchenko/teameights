import type { Meta } from '@storybook/react';
import { Phone } from './phone';
import { Button } from '@/shared/ui';
import { useState } from 'react';

const meta: Meta<typeof Phone> = {
  title: 'widgets/Action-Modal-Phone',
  component: Phone,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const ActionModal_phone = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalNew = () => {
    setOpenModal(true);
  };
  const closeModalNew = () => {
    setOpenModal(false);
  };
  return (
    <div style={{ height: '60vh' }}>
      <Phone
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
      </Phone>
      <Button typeBtn='primary' size='m' color='white' onClick={openModalNew}>
        First Modal
      </Button>
    </div>
  );
};
