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
    _id: '650544eead52282dbf4397aa',
    email: 'johnDoe@example.com',
    password: '$2a$05$7AnHdyBKd7kh78kkSt4OIOaBAidnedL3Sr6ZfFOKG5xcVatrPT4kq',
    isRegistered: false,
    fullName: 'Unknown',
    username: 'unknown@email.com',
    image: '/images/user/unregistered.png',
  },
};

// Active Unregistered User Profile
export const ActiveUnregisteredUserProfile = { ...SidebarProfileTemplate };
ActiveUnregisteredUserProfile.args = {
  ...sidebarProfileProps,
  user: {
    _id: '650544eead52282dbf4397aa',
    email: 'johnDoe@example.com',
    password: '$2a$05$7AnHdyBKd7kh78kkSt4OIOaBAidnedL3Sr6ZfFOKG5xcVatrPT4kq',
    isRegistered: false,
    fullName: 'Unknown',
    username: 'unknown@email.com',
    image: '/images/user/unregistered.png',
  },
  active: true,
};

// User Profile with Long Name
export const UserProfileWithLongName = { ...SidebarProfileTemplate };
UserProfileWithLongName.args = {
  ...sidebarProfileProps,
  user: {
    _id: '650544eead52282dbf4397aa',
    email: 'johnDoe@example.com',
    password: '$2a$05$7AnHdyBKd7kh78kkSt4OIOaBAidnedL3Sr6ZfFOKG5xcVatrPT4kq',
    isRegistered: true,
    fullName: 'Johnathan Doe the Third',
    username: 'john.doe.third',
    image: '/images/user-images/user-blue.png',
  },
};

// User Profile with No Image
export const UserProfileWithNoImage = { ...SidebarProfileTemplate };
UserProfileWithNoImage.args = {
  ...sidebarProfileProps,
  user: {
    _id: '650544eead52282dbf4397ab',
    email: 'johnDoe@example.com',
    password: '$2a$05$7AnHdyBKd7kh78kkSt4OIOaBAidnedL3Sr6ZfFOKG5xcVatrPT4kq',
    isRegistered: true,
    fullName: 'Jane Doe',
    username: 'jane.doe',
    image: '',
  },
};

export default {
  title: 'widgets/Sidebar/SidebarProfile',
  component: SidebarProfile,
  tags: ['autodocs'],
} as Meta;