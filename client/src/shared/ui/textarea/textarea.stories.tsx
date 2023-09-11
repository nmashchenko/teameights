import { useState } from 'react';
import type { Meta } from '@storybook/react';

import { TextArea } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextArea> = {
  argTypes: {},
  component: TextArea,
  tags: ['autodocs'],
  title: 'shared/Fields/TextArea',
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextArea_default = () => {
  const [value, setValue] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '400px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <p>counterPosition - top</p>
        <TextArea
          name='123'
          label='Description'
          counterPosition='top'
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <p>counterPosition - down, disabled</p>
        <TextArea
          name='1232'
          disabled
          label='Description'
          counterPosition='bottom'
          value={value}
          onChange={event => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
