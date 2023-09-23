import { FlexWrapper } from 'shared/ui';
import styles from 'widgets/Sidebar/ui/notification-item/notification-item.module.scss';
import { SidebarLightningIcon } from 'shared/assets';
import { getPastTime } from 'shared/lib';
import React from 'react';
import { SystemNotification as SystemNotificationType } from 'entities/notification';

interface SystemNotificationProps {
  notification: SystemNotificationType;
}

export const SystemNotification: React.FC<SystemNotificationProps> = props => {
  const { notification } = props;
  return (
    <>
      <FlexWrapper gap='12px'>
        <div className={`${styles.messagePicture} ${styles.small}`}>
          {!notification.read && <div className={styles.messageCircle} />}
          <SidebarLightningIcon />
        </div>
        <p className={styles.messageText}>{notification.system_message}</p>
      </FlexWrapper>
      <p className={styles.sendingTime}>{getPastTime(notification.createdAt)}</p>
    </>
  );
};
