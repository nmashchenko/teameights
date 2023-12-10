import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { InputDate } from '../input-date/input-date';
import { InputLink } from '../input-link/input-link';
import { InputPassword } from '../input-password/input-password';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'shared/Fields/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Input__default = () => {
  const [state, setState] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default</p>
        <Input name='1' value={state} onChange={e => setState(e.target.value)} />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input name='2' value={state} onChange={e => setState(e.target.value)} disabled />
      </div>
    </div>
  );
};

export const Input_Password = () => {
  const [state, setState] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: 400,
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Password</p>
        <InputPassword name='password' value={state} onChange={e => setState(e.target.value)} />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <InputPassword
          name='password2'
          disabled
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Input__error = () => {
  const [state, setState] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Error</p>
        <Input
          name='5'
          error='error example'
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input
          name='6'
          disabled
          error='error example'
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Input__password_error = () => {
  const [state, setState] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Error + Password</p>
        <InputPassword
          name='7'
          error='error example'
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <InputPassword
          name='8'
          disabled
          error='error example'
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Input__with_label = () => {
  const [state, setState] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default with label</p>
        <Input name='7' label='Label' value={state} onChange={e => setState(e.target.value)} />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input
          name='8'
          label='Label'
          disabled
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Input_link_label = () => {
  const [state, setState] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default with label and link</p>
        <InputLink
          name='link'
          placeholder='add link'
          value={state}
          onChange={e => setState(e.target.value)}
          linkType='link'
        />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <InputLink
          name='link-disabled'
          placeholder='add link'
          disabled
          value={state}
          onChange={e => setState(e.target.value)}
          linkType='link'
        />
      </div>
    </div>
  );
};

export const Input_date = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default with label and link</p>
        <InputDate name='link' />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <InputDate name='link-disabled' disabled />
      </div>
    </div>
  );
};

export const Input_date_error = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default with label and link</p>
        <InputDate name='link' error='Required' label='Label' />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <InputDate name='link-disabled' disabled error='Required' label='Label' />
      </div>
    </div>
  );
};
