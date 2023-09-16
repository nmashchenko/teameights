import React from 'react';
import styles from 'widgets/Sidebar/ui/notification-content/notification-content.module.scss';

interface NotificationsCountProps {
  pointerEvents?: 'none' | 'all';
  top?: string;
  right?: string;
  left?: string;
  children: React.ReactNode;
}

export const SidebarNotificationsCount: React.FC<NotificationsCountProps> = ({
  pointerEvents = 'none',
  top = 'auto',
  right = 'auto',
  left = 'auto',
  children,
}) => {
  return (
    <div
      className={styles.notificationsCount}
      style={
        {
          '--pointer-events': pointerEvents,
          '--top': top,
          '--right': right,
          '--left': left,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
