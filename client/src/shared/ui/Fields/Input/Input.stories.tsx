import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'shared/Fields/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Input__default: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default</p>
        <Input name="1" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input name="2" disabled />
      </div>
    </div>
  ),
};

export const Input_Password: Story = {
  render: () => (
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
        <Input name="3" type="password" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input name="4" type="password" disabled />
      </div>
    </div>
  ),
};

export const Input__error: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Error</p>
        <Input name="5" error="error example" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input name="6" disabled error="error example" />
      </div>
    </div>
  ),
};

export const Input__password_error: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Error + Password</p>
        <Input name="7" error="error example" type="password" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input name="8" disabled error="error example" type="password" />
      </div>
    </div>
  ),
};

export const Input__with_label: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 400 }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Default with label</p>
        <Input name="7" label="Label" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Disabled</p>
        <Input name="8" label="Label" disabled />
      </div>
    </div>
  ),
};
