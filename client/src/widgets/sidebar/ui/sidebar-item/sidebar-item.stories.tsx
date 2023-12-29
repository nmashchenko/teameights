import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SidebarItem, SidebarItemProps } from './sidebar-item';
import { LightningIcon, SearchIcon } from '@/shared/assets';

const sidebarItemProps: SidebarItemProps = {
  active: false,
  path: '/home',
  icon: <LightningIcon />,
  title: 'Home',
  isActive: false,
};

// Defining meta information for Storybook

type Story = StoryObj<typeof SidebarItem>;
const SidebarItemTemplate: Story = { render: args => <SidebarItem {...args} /> };

export const Playground = { ...SidebarItemTemplate };
Playground.args = sidebarItemProps;

// Active Sidebar Item
export const Active = { ...SidebarItemTemplate };
Active.args = {
  ...sidebarItemProps,
  active: true,
  isActive: true,
};

// Sidebar Item with Long Title
export const LongTitle = { ...SidebarItemTemplate };
LongTitle.args = {
  ...sidebarItemProps,
  title: 'Long Title Example Here',
};

// Sidebar Item on Hover
export const Hover = { ...SidebarItemTemplate };
Hover.args = {
  ...sidebarItemProps,
};
Hover.parameters = {
  pseudo: { hover: true },
};

// Sidebar Item with Different Icon
export const DifferentIcon = { ...SidebarItemTemplate };
DifferentIcon.args = {
  ...sidebarItemProps,
  icon: <SearchIcon />,
};

export default {
  title: 'widgets/Sidebar/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
} as Meta;
