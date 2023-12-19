import React, { useCallback, useState } from 'react';

import { useClickOutside, useGetScreenWidth } from '@/shared/lib';

import { SidebarDesktopModalContent } from './desktop-modal-content';
import { SidebarMobileModalContent } from './mobile-modal-content';
import { NotificationType } from '@teameights/types';
import { useReadNotifications } from '@/entities/session/api/useReadNotifications';

export interface NotificationsModalProps {
  userNotifications: NotificationType[];
  notificationModal: boolean;
  setNotificationModal: (value: boolean) => void;
}

export const SidebarNotificationsModal: React.FC<NotificationsModalProps> = props => {
  const { userNotifications, notificationModal, setNotificationModal } = props;
  const { mutate: readNotifications } = useReadNotifications();

  const [unreadIds, setUnreadIds] = useState(new Set<string>());
  const width = useGetScreenWidth();

  const closeNotificationsModal = useCallback(() => {
    if (notificationModal) {
      setNotificationModal(false);
      if (unreadIds.size) {
        readNotifications(Array.from(unreadIds));
        setUnreadIds(new Set());
      }
    }
  }, [notificationModal, setNotificationModal, unreadIds, readNotifications]);

  const notificationModalRef = useClickOutside<HTMLDivElement>(closeNotificationsModal);

  const markAllAsRead = () => {
    // ... rest of the function ...
  };

  return (
    <>
      {width > 670 ? (
        <SidebarDesktopModalContent
          userNotifications={userNotifications}
          notificationModal={notificationModal}
          notificationModalRef={notificationModalRef}
          markAllAsRead={markAllAsRead}
          closeNotificationsModal={closeNotificationsModal}
          setUnreadIds={setUnreadIds}
        />
      ) : (
        <SidebarMobileModalContent
          userNotifications={userNotifications}
          notificationModal={notificationModal}
          closeNotificationsModal={closeNotificationsModal}
          markAllAsRead={markAllAsRead}
          setUnreadIds={setUnreadIds}
        />
      )}
    </>
  );
};
