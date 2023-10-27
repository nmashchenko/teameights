// import { useChangeMessageStatus } from '../../../api/hooks/123/useChangeMessageStatus'
// import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
// import { LOCAL_PATH } from '../../../http'
import React from 'react';

import { SidebarTeamInvatitionNotification } from './team-invatition-notification';
import { SidebarSystemNotification } from './system-notification';

import styles from './notification-item.module.scss';
import { NotificationType } from '@teameights/types';

export interface NotificationProps {
  /**
   * The notification object.
   */
  notification: NotificationType;
  /**
   * A function to close the notifications modal.
   */
  closeNotificationsModal: () => void;
}

/**
 * SidebarNotificationsItem component renders a list item for the notification.
 *
 * Example:
 *
 * ```tsx
 * <SidebarNotificationsItem
 *    notification={notificationObj}
 *    closeNotificationsModal={handleCloseModal}
 * />
 * ```
 */
export const SidebarNotificationsItem: React.FC<NotificationProps> = props => {
  const { notification, closeNotificationsModal } = props;

  // const isHandlingInvite = false;
  // const { data: teamData, isLoading, error } = useGetTeamData(notification.teamid)
  // const { mutate: teamInviteMutation, isLoading: isHandlingInvite } = useChangeMessageStatus(
  //   notification.teamid,
  // )

  const handleAccept = () => {
    // Mock the mutatios
    console.log('Accepted the invitation');
    closeNotificationsModal();
  };

  const handleReject = () => {
    // Mock the mutation
    console.log('Rejected the invitation');
  };

  const renderContent = () => {
    switch (notification.type) {
      case 'system':
        return <SidebarSystemNotification notification={notification} />;
      case 'team_invite':
        return (
          <SidebarTeamInvatitionNotification
            notification={notification}
            handleAccept={handleAccept}
            handleReject={handleReject}
          />
        );
      default:
        console.error(`Unknown notification type: ${notification}`);
        return null;
    }
  };

  return (
    <li
      className={styles.notificationsItem}
      data-notification-read={notification.read}
      data-notification-id={notification.id}
    >
      {renderContent()}
    </li>
  );
};
