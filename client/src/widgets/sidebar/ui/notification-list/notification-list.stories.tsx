import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationsListProps, SidebarNotificationsList } from './notification-list';
import { SystemNotification, TeamInvitationNotification } from '@/entities/notification';
import { mockUser } from '../../mock';
import { User } from '@/entities/user';
import { Role } from '@/entities/role';
import { Team } from '@/entities/team';

// Mock Role
const mockRole: Role = {
  _id: 'role1',
  value: 'admin',
  description: 'Administrator',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Mock User
const mockUser2: User = {
  _id: 'user1',
  email: 'john@example.com',
  password: 'hashed_password_here',
  username: 'johnDoe',
  fullName: 'John Doe',
  isActivated: true,
  country: 'USA',
  image: '/path/to/image.png',
  roles: [mockRole],
};

// Mock Team
const mockTeam: Team = {
  _id: 'team1',
  name: 'Team Alpha',
  description: 'A description about Team Alpha',
  leader: mockUser,
  members: [mockUser],
  country: 'USA',
  tag: 'ALPHA',
  type: 'invite-only',
  wins: 5,
  points: 50,
  image: '/path/to/team/image.png',
};

const mockSystemNotification: SystemNotification = {
  _id: 'sys1',
  type: 'SystemNotification',
  system_message: 'Your password will expire in 7 days',
  read: false,
  user: mockUser,
  expiresAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockTeamInvitationNotification: TeamInvitationNotification = {
  _id: 'team1',
  type: 'TeamInvitationNotification',
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
};

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
