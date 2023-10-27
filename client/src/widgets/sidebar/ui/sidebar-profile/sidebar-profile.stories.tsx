import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SidebarProfile, SidebarProfileProps } from './sidebar-profile';
import { IUserResponse } from '@teameights/types';

const defaultUser: IUserResponse = {
  id: 123123312,
  fullName: 'John Doe',
  username: 'john.doe',
  photo: { id: 1, path: '/images/user-images/user-red.png' },
} as IUserResponse;

const sidebarProfileProps: SidebarProfileProps = {
  active: false,
  user: defaultUser,
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
  user: {
    id: 6,
    fullName: 'Unknown',
    username: 'unknown@email.com',
    photo: { id: 3, path: '/images/user/unregistered.png' },
  } as IUserResponse,
};

// Active Unregistered User Profile
export const ActiveUnregisteredUserProfile = { ...SidebarProfileTemplate };
ActiveUnregisteredUserProfile.args = {
  ...sidebarProfileProps,
  user: {
    id: 7,
    fullName: 'Unknown',
    username: 'unknown@email.com',
    photo: { id: 4, path: '/images/user/unregistered.png' },
  } as IUserResponse,
  active: true,
};

// User Profile with Long Name
export const UserProfileWithLongName = { ...SidebarProfileTemplate };
UserProfileWithLongName.args = {
  ...sidebarProfileProps,
  user: {
    id: 8,
    fullName: 'Unknown',
    username: 'unknown@email.com',
    photo: { id: 5, path: '/images/user-images/user-blue.png' },
  } as IUserResponse,
};

// User Profile with No Image
export const UserProfileWithNoImage = { ...SidebarProfileTemplate };
UserProfileWithNoImage.args = {
  ...sidebarProfileProps,
  user: {
    id: 9,
    fullName: 'Jane Doe',
    username: 'jane.doe',
    photo: null,
  } as IUserResponse,
};

export default {
  title: 'widgets/Sidebar/SidebarProfile',
  component: SidebarProfile,
  tags: ['autodocs'],
} as Meta;
