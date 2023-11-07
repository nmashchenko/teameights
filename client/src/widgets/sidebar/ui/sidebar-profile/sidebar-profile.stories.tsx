import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SidebarProfile, SidebarProfileProps } from './sidebar-profile';
import { IUserResponse } from '@teameights/types';
import { generateMockUser } from '@/shared/lib';

const mockUser: IUserResponse = generateMockUser();

const sidebarProfileProps: SidebarProfileProps = {
  active: false,
  user: mockUser,
};

type Story = StoryObj<typeof SidebarProfile>;
const SidebarProfileTemplate: Story = { render: args => <SidebarProfile {...args} /> };

export const Playground = { ...SidebarProfileTemplate };
Playground.args = sidebarProfileProps;

// Active User Profile
export const ActiveUserProfile = { ...SidebarProfileTemplate };
ActiveUserProfile.args = {
  ...sidebarProfileProps,
  active: true,
};

// Inactive User Profile
export const InactiveUserProfile = { ...SidebarProfileTemplate };
InactiveUserProfile.args = {
  ...sidebarProfileProps,
  active: false,
};

// Unregistered User Profile
export const UnregisteredUserProfile = { ...SidebarProfileTemplate };
UnregisteredUserProfile.args = {
  ...sidebarProfileProps,
  user: generateMockUser(),
};

// Active Unregistered User Profile
export const ActiveUnregisteredUserProfile = { ...SidebarProfileTemplate };
ActiveUnregisteredUserProfile.args = {
  ...sidebarProfileProps,
  user: generateMockUser(),
  active: true,
};

// User Profile with No Image
export const UserProfileWithNoImage = { ...SidebarProfileTemplate };
UserProfileWithNoImage.args = {
  ...sidebarProfileProps,
  user: {
    ...generateMockUser(),
    photo: null,
  },
};

export default {
  title: 'widgets/Sidebar/SidebarProfile',
  component: SidebarProfile,
  tags: ['autodocs'],
} as Meta;
