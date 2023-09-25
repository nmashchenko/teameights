import React from 'react';

import styles from './notification-content.module.scss';

interface NotificationsCountProps {
  pointerEvents?: 'none' | 'all';
  top?: string;
  right?: string;
  left?: string;
  children: React.ReactNode;
}

/**
 * The `SidebarNotificationsCount` component displays a counter badge showing the number of unread notifications.
 * It allows customization of pointer events and positioning through props.
 *
 * @component
 *
 * @example
 * // Example usage of SidebarNotificationsCount
 * <SidebarNotificationsCount pointerEvents="all" top="6px" left="28px">
 *   {5}
 * </SidebarNotificationsCount>
 *
 * @param {string} pointerEvents - Controls the CSS `pointer-events` property. Either 'none' or 'all'.
 * @param {string} [top] - The top CSS position.
 * @param {string} [right] - The right CSS position.
 * @param {string} [left] - The left CSS position.
 * @param {React.ReactNode} children - Content to display within the notification count badge.
 */
export const SidebarNotificationsCount: React.FC<NotificationsCountProps> = props => {
  const { pointerEvents = 'none', top = 'auto', right = 'auto', left = 'auto', children } = props;

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
