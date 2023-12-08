import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationsListProps, SidebarNotificationsList } from './notification-list';
import {
  generateMockTeam,
  generateMockUser,
  generateSystemNotification,
  generateTeamInvitationNotification,
} from '@/shared/lib';

const mockTeam = generateMockTeam();
const mockUser = generateMockUser(undefined, mockTeam, undefined);
const mockSystemNotification = generateSystemNotification(mockUser);
const mockTeamInvitationNotification = generateTeamInvitationNotification(mockUser, mockTeam);

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
