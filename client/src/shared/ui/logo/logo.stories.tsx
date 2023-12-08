import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@/shared/ui';

type Story = StoryObj<typeof Logo>;

const LogoTemplate: Story = {
  render: args => <Logo {...args} />,
};

export const Logo_Default = { ...LogoTemplate };

export default {
  title: 'shared/Logo',
  component: Logo,
  tags: ['autodocs'],
} as Meta;
