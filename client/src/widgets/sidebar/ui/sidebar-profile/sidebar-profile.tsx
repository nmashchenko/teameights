import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './sidebar-profile.module.scss';
import { IUserProtectedResponse } from '@teameights/types';
import { ImageLoader, Typography } from '@/shared/ui';

const unregisteredImg = '/images/user-images/unregistered.png';

const defaultData = {
  userRealName: 'Unknown',
  userUsername: 'unknown@email.com',
  notificationBell: false,
  userImg: unregisteredImg,
};

interface UserData {
  userRealName: string;
  userUsername: string;
  notificationBell: boolean;
  userImg: string;
}

export interface SidebarProfileProps {
  /**
   * Determines the visual state of the user's real name and username. If true, they are highlighted.
   */
  active: boolean;
  /**
   * The user object containing user information.
   */
  user?: IUserProtectedResponse;
}

/**
 * The SidebarProfile component displays the user's profile information in the sidebar.
 * It shows the user's image, real name, and username. If the user is not registered, default data is shown.
 *
 * Example of usage:
 *
 * ```tsx
 * import { SidebarProfile } from './SidebarProfile';
 * import { User } from 'entities/user';
 *
 * const user = new User({
 *   isRegistered: true,
 *   fullName: 'John Doe',
 *   username: 'john.doe',
 *   image: '/images/user/john.png'
 * });
 *
 * <SidebarProfile
 *   active={true}
 *   user={user}
 * />
 * ```
 */
export const SidebarProfile: React.FC<SidebarProfileProps> = props => {
  const { user, active } = props;

  const isUserRegistered = !!user?.username;
  const [data, setData] = useState<UserData>(defaultData);

  useEffect(() => {
    if (isUserRegistered) {
      setData({
        userRealName: user.fullName,
        userUsername: user.username,
        notificationBell: true,
        userImg: user?.photo?.path || unregisteredImg,
      });
    } else {
      setData(defaultData);
    }
  }, [isUserRegistered, user]);

  return (
    <div className={styles.userInfo}>
      <ImageLoader
        src={data.userImg}
        alt='Profile icon'
        width={32}
        height={32}
        borderRadius={'50%'}
      />
      <div className={styles.userContent}>
        <Typography
          size={'body_m'}
          className={clsx(styles.userRealName, { [styles.active]: active })}
        >
          {data?.userRealName}
        </Typography>
        <Typography
          size={'caption'}
          className={clsx(styles.userUsername, { [styles.active]: active })}
        >
          @{data?.userUsername}
        </Typography>
      </div>
    </div>
  );
};
