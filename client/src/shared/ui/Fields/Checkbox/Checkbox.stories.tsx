import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: 'shared/Fields/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checkbox_default: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '500px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>content - checkbox</p>
        <Checkbox name="123" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>content - checkbox, disabled</p>
        <Checkbox name="123" disabled />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>content - checkbox, disabled, isActive = true</p>
        <Checkbox name="123" disabled isActive />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>content - checktext, label - Label</p>
        <Checkbox name="123" label="Label" />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>content - checktext, label - Label, disabled</p>
        <Checkbox name="123" label="Label" disabled />
      </div>
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>content - checktext, label - Label, disabled, isActive = true</p>
        <Checkbox name="123" label="Label" disabled isActive />
      </div>
    </div>
  ),
};
