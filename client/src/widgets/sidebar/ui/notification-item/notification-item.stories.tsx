import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationProps, SidebarNotificationsItem } from './notification-item';
import { SystemNotification, TeamInvitationNotification } from '@/entities/notification';

const notificationProps: NotificationProps = {
  notification: {
    _id: '1',
    type: 'SystemNotification',
    system_message: 'This is a system notification',
    read: false,
    createdAt: new Date(2023, 8, 25),
  } as SystemNotification,
  closeNotificationsModal: () => console.log('Modal Closed'),
};

type Story = StoryObj<typeof SidebarNotificationsItem>;
const NotificationItemTemplate: Story = { render: args => <SidebarNotificationsItem {...args} /> };

export const Playground = { ...NotificationItemTemplate };
Playground.args = notificationProps;

// Team Invitation Notification
export const TeamInvitation = { ...NotificationItemTemplate };
TeamInvitation.args = {
  notification: {
    _id: '2',
    type: 'TeamInvitationNotification',
    message: 'You have been invited to join Team A',
    image: '/images/team-images/team-pink.png',
    read: false,
    createdAt: new Date(2023, 8, 25),
  } as TeamInvitationNotification,
  closeNotificationsModal: () => console.log('Modal Closed'),
};

// Read Notification
export const ReadNotification = { ...NotificationItemTemplate };
ReadNotification.args = {
  ...notificationProps,
  notification: {
    ...notificationProps.notification,
    read: true,
    system_message: 'This is a read notification',
  } as SystemNotification,
};

export default {
  title: 'widgets/Sidebar/Notifications/NotificationItem',
  component: SidebarNotificationsItem,
  tags: ['autodocs'],
} as Meta;
