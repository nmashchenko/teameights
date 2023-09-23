import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { User } from 'entities/user';

import styles from './sidebar-profile.module.scss';

// import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth';
const unregisteredImg = '/images/user/unregistered.png';

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
  user: User;
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
  // const { data: user } = useCheckAuth();

  const isUserRegistered = user?.isRegistered;
  const [data, setData] = useState<UserData>(defaultData);

  useEffect(() => {
    if (isUserRegistered) {
      setData({
        userRealName: user.fullName,
        userUsername: user.username,
        notificationBell: true,
        userImg: user.image || unregisteredImg,
      });
    } else {
      setData(defaultData);
    }
  }, [isUserRegistered, user]);

  return (
    <div className={styles.userInfo}>
      <Image
        width={32}
        height={32}
        className={styles.profileIcon}
        src={data.userImg}
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=='
        alt='Profile icon'
      />
      <div className={styles.userContent}>
        <strong className={clsx(styles.userRealName, { [styles.active]: active })}>
          {data?.userRealName}
        </strong>
        <p className={clsx(styles.userUsername, { [styles.active]: active })}>
          @{data?.userUsername}
        </p>
      </div>
    </div>
  );
};
