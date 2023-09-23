'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { SidebarProfile } from 'widgets/Sidebar/ui/SidebarProfile/SidebarProfile';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { IconWrapper } from 'shared/ui';
import {
  SidebarCloseIcon,
  SidebarExitIcon,
  SidebarSearchIcon,
  SidebarShortLogo,
  SidebarTeamIcon,
  SidebarTrophyIcon,
  SidebarUserIcon,
} from 'shared/assets';
import { useClickOutside } from 'shared/lib';
import { mockUser } from '../../mock';
import { SidebarNotificationsContent } from 'widgets/Sidebar/ui/notification-content/notification-content';

interface NavData {
  title: string;
  icon: React.ReactNode;
  path: string;
}

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  // const { isAuth } = useSelector((state) => state.userReducer);
  const isAuth = true;
  // const { data: user } = useCheckAuth();
  const user = mockUser;

  const newNavData: NavData[] = [
    {
      title: 'Teammates',
      path: '/',
      icon: <SidebarSearchIcon />,
    },
    {
      title: 'Team',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      path: user?.team ? `/team/${user.team._id}` : '/team',
      icon: (<SidebarTeamIcon />) as React.ReactNode,
    },
    {
      title: 'Tournaments',
      path: '/tournaments',
      icon: <SidebarTrophyIcon />,
    },
  ];

  if (user) {
    newNavData.push({
      title: 'Profile',
      path: `/profile/${user._id}`,
      icon: (<SidebarUserIcon />) as React.ReactNode,
    });
  }

  // const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser();
  const navigate = (path: string) => {
    router.push(path);
  };
  const navMenuRef = useClickOutside(notificationModal ? () => '' : () => setSidebar(false));

  const handleUseLogout = () => {
    // logoutUser();
    console.log('123');
  };

  // if (isUserLoggingOut) {
  //
  //   // return <Loader />;
  // }
  const showSidebar = () => {
    setSidebar(prev => !prev);
  };

  return (
    <>
      <div
        onClick={showSidebar}
        className={clsx(styles.mobileNavBarIconWrapper, { [styles.active]: sidebar })}
      >
        <div className={clsx(styles.navBarClose, { [styles.active]: sidebar })}>
          <SidebarCloseIcon />
        </div>
      </div>

      <div className={clsx(styles.navWrapper, { [styles.active]: sidebar })}>
        <nav
          ref={navMenuRef}
          onClick={e => e.stopPropagation()}
          className={clsx(styles.navMenu, { [styles.active]: sidebar })}
        >
          <div className={styles.navBarToggle}>
            <div className={clsx(styles.navBarLogo, { [styles.active]: sidebar })}>
              <SidebarShortLogo />
            </div>
            <div
              className={clsx(styles.navBarClose, { [styles.active]: sidebar })}
              onClick={showSidebar}
            >
              <SidebarCloseIcon />
            </div>
          </div>
          <SidebarProfile active={sidebar} user={user} />
          <ul className={styles.navItems}>
            {newNavData.map((item, index) => (
              <SidebarItem
                onClick={() => setSidebar(false)}
                active={sidebar}
                key={index}
                isActive={pathname === item.path}
                {...item}
              />
            ))}
          </ul>
          <div className={styles.navInteractions}>
            {isAuth && user && (
              <SidebarNotificationsContent
                userNotifications={user.notifications}
                sidebar={sidebar}
                notificationModal={notificationModal}
                setNotificationModal={setNotificationModal}
              />
            )}
            {!isAuth ? (
              <div
                className={clsx(styles.navInteractBtn, { [styles.active]: sidebar })}
                onClick={() => navigate('/auth/registration')}
              >
                <IconWrapper width='24px' height='24px' cursor='pointer'>
                  <SidebarExitIcon />
                </IconWrapper>
                <p>Login</p>
              </div>
            ) : (
              <div
                className={clsx(styles.navInteractBtn, { [styles.active]: sidebar })}
                onClick={handleUseLogout}
              >
                <IconWrapper width='24px' height='24px' cursor='pointer'>
                  <SidebarExitIcon />
                </IconWrapper>
                <p>Logout</p>
              </div>
            )}
          </div>
          <h3 className={clsx(styles.navBarCopyright, { [styles.active]: sidebar })}>
            copyright © {new Date().getFullYear()} Teameights.
          </h3>
        </nav>
      </div>
    </>
  );
};
