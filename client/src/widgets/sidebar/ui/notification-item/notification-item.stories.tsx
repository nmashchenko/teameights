import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationProps, SidebarNotificationsItem } from './notification-item';
import { ISystemNotification, ITeamInvitationNotification } from '@teameights/types';

const notificationProps: NotificationProps = {
  notification: {
    id: 1,
    type: 'system',
    system_message: 'This is a system notification',
    read: false,
    createdAt: new Date(2023, 8, 25),
  } as ISystemNotification,
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
    id: 2,
    type: 'team_invite',
    message: 'You have been invited to join Team A',
    photo: { id: 1, path: '/images/team-images/team-pink.png' },
    read: false,
    createdAt: new Date(2023, 8, 25),
  } as ITeamInvitationNotification,
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
  } as ISystemNotification,
};

export default {
  title: 'widgets/Sidebar/Notifications/NotificationItem',
  component: SidebarNotificationsItem,
  tags: ['autodocs'],
} as Meta;
