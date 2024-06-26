import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NotificationContentProps, SidebarNotificationsContent } from './notification-content';
import { generateSystemNotification } from '@/shared/lib';

// Generate mock notifications using the provided mocs feature
const mockNotifications = Array.from({ length: 5 }).map(() => generateSystemNotification());

const defaultProps: NotificationContentProps = {
  userNotifications: mockNotifications,
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
  userNotifications: mockNotifications,
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
  userNotifications: mockNotifications.filter(notification => !notification.read),
};

export default {
  title: 'widgets/Sidebar/Notifications/SidebarNotificationsContent',
  component: SidebarNotificationsContent,
} as Meta;
