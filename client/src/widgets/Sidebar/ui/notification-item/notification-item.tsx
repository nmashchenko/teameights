// import { useChangeMessageStatus } from '../../../api/hooks/123/useChangeMessageStatus'
// import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
// import { LOCAL_PATH } from '../../../http'
import React from 'react';

import { Loader } from 'shared/ui';

import { Notification } from 'entities/notification';

import { TeamInvatitionNotification } from './team-invatition-notification';

import styles from './notification-item.module.scss';
import { SystemNotification } from 'widgets/Sidebar/ui/notification-item/system-notification';

interface NotificationProps {
  notification: Notification;
  closeNotificationsModal: () => void;
}

export const NotificationsItem: React.FC<NotificationProps> = props => {
  const { notification, closeNotificationsModal } = props;

  const isHandlingInvite = false;
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
      case 'SystemNotification':
        return <SystemNotification notification={notification} />;
      case 'TeamInvitationNotification':
        return (
          <TeamInvatitionNotification
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

  if (isHandlingInvite) {
    return <Loader />;
  }

  return (
    <li
      className={styles.styledNotificationsItem}
      data-notification-read={notification.read}
      data-notification-id={notification._id}
    >
      {renderContent()}
    </li>
  );
};
