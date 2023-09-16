import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './SidebarProfile.module.scss';
import Image from 'next/image';

// import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth';
const unregisteredImg = '/Images/user/unregistered.png';

const defaultData = {
  userRealName: 'Unknown',
  userUsername: 'unknown@email.com',
  notificationBell: false,
  userImg: unregisteredImg,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeData = (data: any) => {
  return {
    userRealName: data.fullName,
    userUsername: data.username,
    notificationBell: true,
    userImg: data.image,
  };
};

interface SidebarProfileProps {
  active: boolean;
  user: any;
}

// TODO: fix types

export const SidebarProfile: React.FC<SidebarProfileProps> = ({ active, user }) => {
  // const { data: user } = useCheckAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isUserRegistered = user?.isRegistered;
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (isUserRegistered) {
      setData(changeData(user));
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
        src={data.userImg || unregisteredImg}
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
