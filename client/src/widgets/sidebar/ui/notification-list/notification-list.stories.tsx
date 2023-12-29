import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationsListProps, SidebarNotificationsList } from './notification-list';
import { generateMockUser, generateSystemNotification } from '@/shared/lib';

const mockUser = generateMockUser();
const mockSystemNotification = generateSystemNotification(mockUser);

const notificationsListProps: NotificationsListProps = {
  userNotifications: [mockSystemNotification],
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

// With Read Notifications
export const WithReadNotifications = { ...SidebarNotificationsListTemplate };
WithReadNotifications.args = {
  ...notificationsListProps,
  userNotifications: [{ ...mockSystemNotification, read: true }],
};

export default {
  title: 'widgets/Sidebar/Notifications/SidebarNotificationsList',
  component: SidebarNotificationsList,
  tags: ['autodocs'],
} as Meta;
