// import { useChangeMessageStatus } from '../../../api/hooks/sidebar/useChangeMessageStatus'
// import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { FlexWrapper, Loader } from 'shared/ui';
// import { LOCAL_PATH } from '../../../http'
import styles from './notification-item.module.scss';
import { getPastTime } from 'shared/lib';
import { SidebarLightning } from 'shared/assets';
import Image from 'next/image';
import { Notifications } from 'entities/notification';

interface NotificationProps {
  notification: Notifications;
  closeNotificationsModal: () => void;
}

export const NotificationsItem: React.FC<NotificationProps> = ({
  notification,
  closeNotificationsModal,
}) => {
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

  const render = () => {
    switch (notification.type) {
      case 'SystemNotification':
        return (
          <>
            <FlexWrapper gap='12px'>
              <div className={`${styles.messagePicture} ${styles.small}`}>
                {!notification.read && <div className={styles.messageCircle} />}
                <SidebarLightning />
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
                <Image width={32} height={32} src={notification.image} alt='Team invation icon' />
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
