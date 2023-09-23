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

interface SidebarProfileProps {
  active: boolean;
  user: User;
}

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
