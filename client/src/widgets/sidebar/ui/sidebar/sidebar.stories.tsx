import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';

type Story = StoryObj<typeof Sidebar>;
const SidebarTemplate: Story = { render: args => <Sidebar {...args} /> };

export const Playground = { ...SidebarTemplate };
Playground.args = {};

export default {
  title: 'widgets/Sidebar/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;
