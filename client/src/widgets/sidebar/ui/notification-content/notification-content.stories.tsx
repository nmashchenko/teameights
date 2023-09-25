import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NotificationContentProps, SidebarNotificationsContent } from './notification-content';

import { Notification, SystemNotification } from '@/entities/notification';

const defaultNotifications: Notification[] = [
  {
    _id: '1',
    type: 'SystemNotification',
    system_message: 'System Message 1',
    read: false,
    createdAt: new Date(),
  } as SystemNotification,
  {
    _id: '2',
    type: 'SystemNotification',
    system_message: 'System Message 2',
    read: true,
    createdAt: new Date(),
  } as SystemNotification,
];

const defaultProps: NotificationContentProps = {
  userNotifications: defaultNotifications,
  isSidebarExpanded: false,
  notificationModal: false,
  setNotificationModal: () => {},
};

type Story = StoryFn<typeof SidebarNotificationsContent>;
const NotificationContentTemplate: Story = args => {
  const [modalOpen, setModalOpen] = useState(args.notificationModal);
  return (
    <SidebarNotificationsContent
      {...args}
      notificationModal={modalOpen}
      setNotificationModal={setModalOpen}
    />
  );
};

// Playground Story
export const Playground = { ...NotificationContentTemplate };
Playground.args = { ...defaultProps };

// Sidebar Expanded
export const SidebarExpanded = { ...NotificationContentTemplate };
SidebarExpanded.args = {
  ...defaultProps,
  isSidebarExpanded: true,
};

// Sidebar Collapsed
export const SidebarCollapsed = { ...NotificationContentTemplate };
SidebarCollapsed.args = {
  ...defaultProps,
  isSidebarExpanded: false,
};

// With Notifications
export const WithNotifications = { ...NotificationContentTemplate };
WithNotifications.args = {
  ...defaultProps,
  userNotifications: defaultNotifications,
};

// Without Notifications
export const WithoutNotifications = { ...NotificationContentTemplate };
WithoutNotifications.args = {
  ...defaultProps,
  userNotifications: [],
};

// With Unread Notifications
export const WithUnreadNotifications = { ...NotificationContentTemplate };
WithUnreadNotifications.args = {
  ...defaultProps,
  userNotifications: [
    ...defaultNotifications,
    {
      _id: '3',
      type: 'SystemNotification',
      system_message: 'Unread System Message',
      read: false,
      createdAt: new Date(),
    } as SystemNotification,
  ],
};

export default {
  title: 'widgets/Sidebar/Notifications/SidebarNotificationsContent',
  component: SidebarNotificationsContent,
} as Meta;
