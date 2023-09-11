import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: 'shared/Fields/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checkbox_default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '500px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default checkbox</p>
        <Checkbox name='123' checked={checked} onChange={() => setChecked(prev => !prev)} />
      </div>
    </div>
  );
};

export const Checkbox_default_disabled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '500px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled checkbox</p>
        <Checkbox
          name='123'
          checked={checked}
          onChange={() => setChecked(prev => !prev)}
          disabled
        />
      </div>
    </div>
  );
};

export const Checkbox_default_label = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '500px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Labeled checkbox</p>
        <Checkbox
          name='123'
          checked={checked}
          onChange={() => setChecked(prev => !prev)}
          label={'Checkbox label'}
        />
      </div>
    </div>
  );
};

export const Checkbox_default_label_disabled_checked = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '500px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Labeled checkbox disabled and checked</p>
        <Checkbox
          name='123'
          checked={checked}
          onChange={() => setChecked(prev => !prev)}
          label={'Checkbox label'}
          disabled
        />
      </div>
    </div>
  );
};
