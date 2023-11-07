import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SidebarNotificationsItem } from './notification-item';
import { generateSystemNotification, generateTeamInvitationNotification } from '@/shared/lib';

const systemNotificationMock = generateSystemNotification();
const teamInvitationNotificationMock = generateTeamInvitationNotification();

type Story = StoryObj<typeof SidebarNotificationsItem>;
const NotificationItemTemplate: Story = { render: args => <SidebarNotificationsItem {...args} /> };

export const Playground = { ...NotificationItemTemplate };
Playground.args = {
  notification: systemNotificationMock,
  closeNotificationsModal: () => console.log('Modal Closed'),
};

// Team Invitation Notification
export const TeamInvitation = { ...NotificationItemTemplate };
TeamInvitation.args = {
  notification: teamInvitationNotificationMock,
  closeNotificationsModal: () => console.log('Modal Closed'),
};

// Read Notification
export const ReadNotification = { ...NotificationItemTemplate };
ReadNotification.args = {
  notification: {
    ...systemNotificationMock,
    read: true,
    system_message: 'This is a read notification',
  },
  closeNotificationsModal: () => console.log('Modal Closed'),
};

export default {
  title: 'widgets/Sidebar/Notifications/NotificationItem',
  component: SidebarNotificationsItem,
  tags: ['autodocs'],
} as Meta;
