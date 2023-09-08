import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Profile.module.scss';

// import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth';
const unregisteredImg = '/Images/user/unregistered.png';

const defaultData = {
  userRealName: 'Unknown',
  userUsername: 'unknown@email.com',
  notificationBell: false,
  userImg: unregisteredImg
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeData = (data: any) => {
  return {
    userRealName: data.fullName,
    userUsername: data.username,
    notificationBell: true,
    userImg: data.image
  };
};

type SidebarProfileProps = {
  active: boolean;
};

// TODO: fix types

export const SidebarProfile: React.FC<SidebarProfileProps> = ({ active }) => {
  // const { data: user } = useCheckAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = {};
  const isUserRegistered = user?.isRegistered;
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (isUserRegistered) {
      setData(changeData(user));
    } else {
      setData(defaultData);
    }
  }, [user]);

  return (
    <div className={styles.userInfo}>
      <img
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
