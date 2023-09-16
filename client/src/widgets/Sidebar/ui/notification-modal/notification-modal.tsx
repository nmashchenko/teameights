import React, { useState } from 'react';
import styles from './notification-modal.module.scss';
import { useClickOutside, useGetScreenWidth } from 'shared/lib';
import { IconWrapper } from 'shared/ui';
import SidebarNotificationsList from '../notification-list/notification-list';
import { SidebarChecks, SidebarNotificationClose } from 'shared/assets';
import { Notifications } from 'entities/notification';

interface NotificationsModalProps {
  userNotifications: Notifications[]; // Define a proper type for this
  notificationModal: boolean;
  setNotificationModal: (value: boolean) => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({
  userNotifications,
  notificationModal,
  setNotificationModal,
}) => {
  const [unreadIds, setUnreadIds] = useState(new Set<string>());
  const notificationModalRef = useClickOutside<HTMLDivElement>(closeNotificationsModal);
  // const { mutateAsync: readMessages } = useReadMessages();
  const width = useGetScreenWidth();
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  function closeNotificationsModal() {
    if (notificationModal) {
      setNotificationModal(false);
      if (unreadIds.size) {
        // Request to the server is here
        // await readMessages(Array.from(unreadIds))
        setUnreadIds(new Set());
      }
    }
  }

  const markAllAsRead = async () => {
    // ... rest of the function ...
  };

  // const mobileModalContent = (
  //   <div
  //     className={clsx(styles.mobileNotificationsModal, { [styles.modalActive]: notificationModal })}
  //   >
  //     <div className={styles.mobileWrapper}>
  //       <div>
  //         <div className={styles.notificationsHeader}>
  //           <h3 className={styles.text}>Notifications</h3>
  //           <div className={styles.crossBtn} onClick={closeNotificationsModal}>
  //             <SidebarNotificationClose width={14} height={14} />
  //           </div>
  //         </div>
  //         <SidebarNotificationsList
  //           userNotifications={userNotifications}
  //           closeNotificationsModal={closeNotificationsModal}
  //           setUnreadIds={setUnreadIds}
  //         />
  //       </div>
  //       <button className={styles.markAllBtnMobile} onClick={markAllAsRead}>
  //         <IconWrapper width='20px' height='20px'>
  //           <SidebarChecks />
  //         </IconWrapper>
  //         <p>Mark all as read</p>
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <>
      {width > 670 ? (
        <div
          className={`${styles.notificationsModal} ${notificationModal ? styles.active : ''}`}
          ref={notificationModalRef}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.notificationsHeader}>
            <div className={styles.markAllBtn} onClick={markAllAsRead}>
              <IconWrapper width='20px' height='20px'>
                <SidebarChecks />
              </IconWrapper>
              <p>Mark all as read</p>
            </div>
            <div className={styles.crossBtn} onClick={closeNotificationsModal}>
              <SidebarNotificationClose />
            </div>
          </div>
          <SidebarNotificationsList
            userNotifications={userNotifications}
            closeNotificationsModal={closeNotificationsModal}
            setUnreadIds={setUnreadIds}
          />
        </div>
      ) : (
        '123'
        // isClient && createPortal(mobileModalContent, document.body)
      )}
    </>
  );
};

export default NotificationsModal;
