import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationsListProps, SidebarNotificationsList } from './notification-list';
import { mockUser } from '../../mock';
import {
  IRole,
  ISystemNotification,
  ITeam,
  ITeamInvitationNotification,
  IUserResponse,
} from '@teameights/types';

// Mock Role
const mockRole: IRole = {
  id: 1,
  name: 'admin',
};

// Mock User
const mockUser2: IUserResponse = {
  id: 1,
  username: 'johnDoe',
  fullName: 'John Doe',
  country: 'USA',
  photo: { id: 1, path: '/path/to/image.png' },
  role: mockRole,
} as IUserResponse;

// Mock Team
const mockTeam: ITeam = {
  id: 'team1',
  name: 'Team Alpha',
  description: 'A description about Team Alpha',
  leader: mockUser,
  members: [mockUser],
  country: 'USA',
  tag: 'ALPHA',
  type: 'invite_only',
  wins: 5,
  points: 50,
  image: '/path/to/team/image.png',
} as ITeam;

const mockSystemNotification: ISystemNotification = {
  id: 1,
  type: 'system',
  system_message: 'Your password will expire in 7 days',
  read: false,
  user: mockUser,
  expiresAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
} as ISystemNotification;

const mockTeamInvitationNotification: ITeamInvitationNotification = {
  id: 2,
  type: 'team_invite',
  teamid: mockTeam,
  user: mockUser2,
  from_user_id: mockUser,
  to_user_email: 'john@example.com',
  status: 'pending',
  message: 'You have been invited to join Team X',
  image: '/images/team-images/team-red.png',
  read: false,
  expiresAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
} as ITeamInvitationNotification;

const notificationsListProps: NotificationsListProps = {
  userNotifications: [mockSystemNotification, mockTeamInvitationNotification],
  setUnreadIds: callback => new Set(callback(new Set())),
  closeNotificationsModal: () => console.log('Modal Closed'),
};

type Story = StoryObj<typeof SidebarNotificationsList>;
const SidebarNotificationsListTemplate: Story = {
  render: args => <SidebarNotificationsList {...args} />,
};

// Default Playground
export const Playground = { ...SidebarNotificationsListTemplate };
Playground.args = notificationsListProps;

// Empty List
export const EmptyList = { ...SidebarNotificationsListTemplate };
EmptyList.args = {
  userNotifications: [],
  setUnreadIds: () => {},
  closeNotificationsModal: () => {},
};

// With Only System Notifications
export const OnlySystemNotifications = { ...SidebarNotificationsListTemplate };
OnlySystemNotifications.args = {
  ...notificationsListProps,
  userNotifications: [mockSystemNotification],
};

// With Only Team Invitations
export const OnlyTeamInvitations = { ...SidebarNotificationsListTemplate };
OnlyTeamInvitations.args = {
  ...notificationsListProps,
  userNotifications: [mockTeamInvitationNotification],
};

// With Read Notifications
export const WithReadNotifications = { ...SidebarNotificationsListTemplate };
WithReadNotifications.args = {
  ...notificationsListProps,
  userNotifications: [
    { ...mockSystemNotification, read: true },
    { ...mockTeamInvitationNotification, read: true },
  ],
};

export default {
  title: 'widgets/Sidebar/Notifications/SidebarNotificationsList',
  component: SidebarNotificationsList,
  tags: ['autodocs'],
} as Meta;