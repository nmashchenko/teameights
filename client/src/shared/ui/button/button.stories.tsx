import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'shared/assets';
import { Button } from './ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button_Primary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='primary' size='l'>
          Some Text
        </Button>
        <Button typeBtn='primary' isDisabled size='l'>
          Some Text
        </Button>
        <Button typeBtn='primary' content='icon_button' size='l'>
          <Plus />
        </Button>
        <Button typeBtn='primary' content='icon_button' size='l' isDisabled>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='primary' size='m'>
          Some Text
        </Button>
        <Button typeBtn='primary' isDisabled size='m'>
          Some Text
        </Button>
        <Button typeBtn='primary' content='icon_button' size='m'>
          <Plus />
        </Button>
        <Button typeBtn='primary' content='icon_button' isDisabled size='m'>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='primary' size='s'>
          Some Text
        </Button>
        <Button typeBtn='primary' isDisabled size='s'>
          Some Text
        </Button>
        <Button typeBtn='primary' content='icon_button' size='s'>
          <Plus />
        </Button>
        <Button typeBtn='primary' content='icon_button' isDisabled size='s'>
          <Plus />
        </Button>
      </div>
    </div>
  )
};

export const Button_Secondary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='secondary' size='l'>
          Some Text
        </Button>
        <Button typeBtn='secondary' isDisabled size='l'>
          Some Text
        </Button>
        <Button typeBtn='secondary' content='icon_button' size='l'>
          <Plus />
        </Button>
        <Button typeBtn='secondary' content='icon_button' size='l' isDisabled>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='secondary' size='m'>
          Some Text
        </Button>
        <Button typeBtn='secondary' isDisabled size='m'>
          Some Text
        </Button>
        <Button typeBtn='secondary' content='icon_button' size='m'>
          <Plus />
        </Button>
        <Button typeBtn='secondary' content='icon_button' isDisabled size='m'>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='secondary' size='s'>
          Some Text
        </Button>
        <Button typeBtn='secondary' isDisabled size='s'>
          Some Text
        </Button>
        <Button typeBtn='secondary' content='icon_button' size='s'>
          <Plus />
        </Button>
        <Button typeBtn='secondary' content='icon_button' isDisabled size='s'>
          <Plus />
        </Button>
      </div>
    </div>
  )
};

export const Button_Danger: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='danger' size='l'>
          Some Text
        </Button>
        <Button typeBtn='danger' isDisabled size='l'>
          Some Text
        </Button>
        <Button typeBtn='danger' content='icon_button' size='l'>
          <Plus />
        </Button>
        <Button typeBtn='danger' content='icon_button' size='l' isDisabled>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='danger' size='m'>
          Some Text
        </Button>
        <Button typeBtn='danger' isDisabled size='m'>
          Some Text
        </Button>
        <Button typeBtn='danger' content='icon_button' size='m'>
          <Plus />
        </Button>
        <Button typeBtn='danger' content='icon_button' isDisabled size='m'>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='danger' size='s'>
          Some Text
        </Button>
        <Button typeBtn='danger' isDisabled size='s'>
          Some Text
        </Button>
        <Button typeBtn='danger' content='icon_button' size='s'>
          <Plus />
        </Button>
        <Button typeBtn='danger' content='icon_button' isDisabled size='s'>
          <Plus />
        </Button>
      </div>
    </div>
  )
};

export const Button_Tertiary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='tertiary' size='l'>
          Some Text
        </Button>
        <Button typeBtn='tertiary' isDisabled size='l'>
          Some Text
        </Button>
        <Button typeBtn='tertiary' content='icon_button' size='l'>
          <Plus />
        </Button>
        <Button typeBtn='tertiary' content='icon_button' size='l' isDisabled>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='tertiary' size='m'>
          Some Text
        </Button>
        <Button typeBtn='tertiary' isDisabled size='m'>
          Some Text
        </Button>
        <Button typeBtn='tertiary' content='icon_button' size='m'>
          <Plus />
        </Button>
        <Button typeBtn='tertiary' content='icon_button' isDisabled size='m'>
          <Plus />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button typeBtn='tertiary' size='s'>
          Some Text
        </Button>
        <Button typeBtn='tertiary' isDisabled size='s'>
          Some Text
        </Button>
        <Button typeBtn='tertiary' content='icon_button' size='s'>
          <Plus />
        </Button>
        <Button typeBtn='tertiary' content='icon_button' isDisabled size='s'>
          <Plus />
        </Button>
      </div>
    </div>
  )
};
