import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Modal_Opened: Story = {
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          Some Text
        </Modal>
        <Button typeBtn="primary" size="m" onClick={() => setIsModalOpen(true)}>
          Open modal
        </Button>
      </div>
    );
  },
};
