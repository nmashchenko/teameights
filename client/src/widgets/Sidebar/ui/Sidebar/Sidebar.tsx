'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { SidebarProfile } from 'widgets/Sidebar/ui/SidebarProfile/SidebarProfile';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { IconWrapper } from 'shared/ui';
import {
  SidebarClose,
  SidebarExit,
  SidebarSearch,
  SidebarShortLogo,
  SidebarTeam,
  SidebarTrophy,
  SidebarUser,
} from 'shared/assets';
import { useClickOutside } from 'shared/lib';
import userData from '../../mock.json';
import { NotificationsContent } from 'widgets/Sidebar/ui/notification-content/notification-content';

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
  const user = userData;
  console.log('@user', user.notifications);

  const newNavData: NavData[] = [
    {
      title: 'Teammates',
      path: '/',
      icon: <SidebarSearch />,
    },
    {
      title: 'Team',
      path: user?.team ? `/team/${user.team._id}` : '/team',
      icon: (<SidebarTeam />) as React.ReactNode,
    },
    {
      title: 'Tournaments',
      path: '/tournaments',
      icon: <SidebarTrophy />,
    },
  ];

  if (user) {
    newNavData.push({
      title: 'Profile',
      path: `/profile/${user._id}`,
      icon: (<SidebarUser />) as React.ReactNode,
    });
  }

  // const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser();
  const navigate = (path: string) => {
    router.push(path);
  };
  const navMenuRef = useClickOutside(() => setSidebar(false));

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
          <SidebarClose />
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
              <SidebarClose />
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
                path={item.path}
                {...item}
              />
            ))}
          </ul>
          <div className={styles.navInteractions}>
            {isAuth && user && (
              <NotificationsContent
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
                  <SidebarExit />
                </IconWrapper>
                <p>Login</p>
              </div>
            ) : (
              <div
                className={clsx(styles.navInteractBtn, { [styles.active]: sidebar })}
                onClick={handleUseLogout}
              >
                <IconWrapper width='24px' height='24px' cursor='pointer'>
                  <SidebarExit />
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
