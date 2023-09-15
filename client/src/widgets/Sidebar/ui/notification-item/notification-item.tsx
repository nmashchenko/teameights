// import { useChangeMessageStatus } from '../../../api/hooks/sidebar/useChangeMessageStatus'
// import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import LightningIcon from '../../../assets/Sidebar/LightningIcon';
// import { LOCAL_PATH } from '../../../http'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper';
import Loader from '../../../shared/components/Loader/Loader';
import { getPastTime } from '../../../utils/getPastTime';

import styles from './NotificationsItem.module.scss';

interface NotificationProps {
  notification: {
    type: string;
    teamid: string;
    _id: string;
    read: boolean;
    system_message?: string;
    image?: string;
    message?: string;
    createdAt: string;
  };
  closeNotificationsModal: () => void;
}

export const NotificationsItem: React.FC<NotificationProps> = ({
  notification,
  closeNotificationsModal,
}) => {
  // Mock data and states
  const teamData = {
    /* mock your team data here */
  };
  const isLoading = false;
  const error = null;
  const isHandlingInvite = false;
  // const { data: teamData, isLoading, error } = useGetTeamData(notification.teamid)
  // const { mutate: teamInviteMutation, isLoading: isHandlingInvite } = useChangeMessageStatus(
  //   notification.teamid,
  // )

  const handleAccept = () => {
    // Mock the mutation
    console.log('Accepted the invitation');
    closeNotificationsModal();
  };

  const handleReject = () => {
    // Mock the mutation
    console.log('Rejected the invitation');
  };

  const render = () => {
    switch (notification.type) {
      case 'SystemNotification':
        return (
          <>
            <FlexWrapper gap='12px'>
              <div className={`${styles.messagePicture} ${styles.small}`}>
                {!notification.read && <div className={styles.messageCircle} />}
                <LightningIcon />
              </div>
              <p className={styles.messageText}>{notification.system_message}</p>
            </FlexWrapper>
            <p className={styles.sendingTime}>{getPastTime(notification.createdAt)}</p>
          </>
        );
      case 'TeamInvitationNotification':
        return (
          <>
            <FlexWrapper gap='12px'>
              <div className={styles.messagePicture}>
                {!notification.read && <div className={styles.messageCircle} />}
                <img src={notification.image} alt='' />
              </div>
              <div className={styles.messageContentWrapper}>
                <p className={styles.messageText}>{notification.message}</p>
                <FlexWrapper gap='8px'>
                  <button
                    onClick={handleAccept}
                    className={`${styles.messageButton} ${styles.accept}`}
                  >
                    Accept
                  </button>
                  <button onClick={handleReject} className={styles.messageButton}>
                    Reject
                  </button>
                </FlexWrapper>
              </div>
            </FlexWrapper>
            <p className={styles.sendingTime}>{getPastTime(notification.createdAt)}</p>
          </>
        );
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
      {render()}
    </li>
  );
};
