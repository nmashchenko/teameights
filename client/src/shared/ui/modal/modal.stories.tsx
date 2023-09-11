import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button';
import { Modal } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Modal_Opened = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Some Text
      </Modal>
      <Button typeBtn='primary' size='m' onClick={() => setIsModalOpen(true)}>
        Open modal
      </Button>
    </div>
  );
};
