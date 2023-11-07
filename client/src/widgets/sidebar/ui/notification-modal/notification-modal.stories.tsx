import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationType } from '@teameights/types';
import { generateSystemNotification, generateTeamInvitationNotification } from '@/shared/lib';
import { NotificationsModalProps, SidebarNotificationsModal } from './notification-modal';

// Generating mock notifications to use in stories
const mockNotifications: NotificationType[] = [
  generateSystemNotification(),
  generateTeamInvitationNotification(),
];

const notificationsModalProps: NotificationsModalProps = {
  userNotifications: mockNotifications,
  notificationModal: false,
  setNotificationModal: () => {}, // This should be replaced with an action
};

// Defining meta information for Storybook
type Story = StoryObj<typeof SidebarNotificationsModal>;
const NotificationsModalTemplate: Story = {
  render: args => (
    <div style={{ width: 300, height: 300, position: 'relative' }}>
      <SidebarNotificationsModal {...args} />
    </div>
  ),
};

export const Playground = { ...NotificationsModalTemplate };
Playground.args = notificationsModalProps;

// Notifications Modal Open
export const Open = { ...NotificationsModalTemplate };
Open.args = {
  ...notificationsModalProps,
  notificationModal: true,
};

// Notifications Modal with No Notifications
export const Empty = { ...NotificationsModalTemplate };
Empty.args = {
  ...notificationsModalProps,
  userNotifications: [],
};

export default {
  title: 'widgets/Sidebar/NotificationsModal',
  component: SidebarNotificationsModal,
  tags: ['autodocs'],
} as Meta;
