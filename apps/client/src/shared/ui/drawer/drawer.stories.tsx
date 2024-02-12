import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { Drawer } from './drawer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Drawer_Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100dvh' }}>
      <Drawer open={open} onClose={() => setOpen(false)}>
        Some Text
      </Drawer>

      <Button typeBtn='primary' size='m' onClick={() => setOpen(true)}>
        Open drawer
      </Button>
    </div>
  );
};

export const Drawer_Fullheight = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100dvh' }}>
      <Drawer open={open} onClose={() => setOpen(false)} isFullHeight>
        <Button typeBtn='primary' size='m' onClick={() => setOpen(false)}>
          close
        </Button>
      </Drawer>

      <Button typeBtn='primary' size='m' onClick={() => setOpen(true)}>
        Open drawer
      </Button>
    </div>
  );
};
