import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useClickOutside, useGetScreenWidth } from 'shared/lib';
import { Notification } from 'entities/notification';

import { DesktopModalContent } from './desktop-modal-content';
import { MobileModalContent } from './mobile-modal-content';

export interface NotificationsModalProps {
  userNotifications: Notification[];
  notificationModal: boolean;
  setNotificationModal: (value: boolean) => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = props => {
  const { userNotifications, notificationModal, setNotificationModal } = props;

  const [unreadIds, setUnreadIds] = useState(new Set<string>());
  // const { mutateAsync: readMessages } = useReadMessages();
  const width = useGetScreenWidth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeNotificationsModal = useCallback(() => {
    if (notificationModal) {
      setNotificationModal(false);
      if (unreadIds.size) {
        // Request to the server is here
        // await readMessages(Array.from(unreadIds))
        setUnreadIds(new Set());
      }
    }
  }, [notificationModal, setNotificationModal, unreadIds]);

  const notificationModalRef = useClickOutside<HTMLDivElement>(closeNotificationsModal);

  const markAllAsRead = () => {
    // ... rest of the function ...
  };

  return (
    <>
      {width > 670 ? (
        <DesktopModalContent
          userNotifications={userNotifications}
          notificationModal={notificationModal}
          notificationModalRef={notificationModalRef}
          markAllAsRead={markAllAsRead}
          closeNotificationsModal={closeNotificationsModal}
          setUnreadIds={setUnreadIds}
        />
      ) : (
        isClient &&
        createPortal(
          <MobileModalContent
            userNotifications={userNotifications}
            notificationModal={notificationModal}
            closeNotificationsModal={closeNotificationsModal}
            markAllAsRead={markAllAsRead}
            setUnreadIds={setUnreadIds}
          />,
          document.body
        )
      )}
    </>
  );
};
