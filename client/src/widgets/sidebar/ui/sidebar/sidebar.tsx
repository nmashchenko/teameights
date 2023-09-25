'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

import { IconWrapper } from '@/shared/ui';
import { BugerCloseIcon, LogoShort, SignOutIcon } from '@/shared/assets';
import { useClickOutside } from '@/shared/lib';
import { CLIENT_ROUTES } from '@/shared/constant';

import { mockUser } from '../../mock';
import { getSidebarItems } from '../../config/getSidebarItems';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import { SidebarProfile } from '../sidebar-profile/sidebar-profile';
import { SidebarNotificationsContent } from '../notification-content/notification-content';

import styles from './sidebar.module.scss';
import { SignInIcon } from '@/shared/assets/icons/24px';

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  // const { isAuth } = useSelector((state) => state.userReducer);
  const isAuth = true;
  // const { data: user } = useCheckAuth();
  const user = mockUser;

  const sidebarItemsData = React.useMemo(() => {
    return getSidebarItems(user);
  }, [user]);

  // const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser();
  const navigateToPath = (path: string) => {
    router.push(path);
  };

  const navMenuRef = useClickOutside(
    notificationModal ? () => '' : () => setIsSidebarExpanded(false)
  );

  const handleLogout = () => {
    // logoutUser();
    console.log('123');
  };

  // if (isUserLoggingOut) {
  //
  //   // return <Loader />;
  // }
  const handleShowSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  return (
    <>
      <button
        onClick={handleShowSidebar}
        className={clsx(styles.mobileIcon, { [styles.active]: isSidebarExpanded })}
        aria-label='Toggle Sidebar'
      >
        <div className={clsx(styles.close, { [styles.active]: isSidebarExpanded })}>
          <BugerCloseIcon />
        </div>
      </button>

      <aside
        className={clsx(styles.sidebarWrapper, { [styles.active]: isSidebarExpanded })}
        aria-expanded={isSidebarExpanded}
      >
        <nav
          ref={navMenuRef}
          onClick={e => e.stopPropagation()}
          className={clsx(styles.menu, { [styles.active]: isSidebarExpanded })}
          aria-label='Sidebar Navigation'
        >
          <div className={styles.toggle}>
            <div className={clsx(styles.logo, { [styles.active]: isSidebarExpanded })}>
              <LogoShort />
            </div>
            <button
              className={clsx(styles.close, { [styles.active]: isSidebarExpanded })}
              onClick={handleShowSidebar}
              aria-label='Toggle sidebar'
            >
              <BugerCloseIcon aria-hidden='true' />
            </button>
          </div>
          <SidebarProfile active={isSidebarExpanded} user={user} />
          <ul className={styles.list} role='menu'>
            {sidebarItemsData.map(item => (
              <SidebarItem
                onClick={() => setIsSidebarExpanded(false)}
                active={isSidebarExpanded}
                key={item.path}
                isActive={pathname === item.path}
                {...item}
                role='menuitem'
              />
            ))}
          </ul>
          <div className={styles.interactions}>
            {isAuth && user && (
              <SidebarNotificationsContent
                userNotifications={user.notifications}
                isSidebarExpanded={isSidebarExpanded}
                notificationModal={notificationModal}
                setNotificationModal={setNotificationModal}
              />
            )}
            {!isAuth ? (
              <button
                className={clsx(styles.interactButton, { [styles.active]: isSidebarExpanded })}
                onClick={() => navigateToPath(CLIENT_ROUTES.REGISTRATION)}
                aria-label='Login'
              >
                <IconWrapper width='24px' height='24px' cursor='pointer'>
                  <SignInIcon />
                </IconWrapper>
                <span>Login</span>
              </button>
            ) : (
              <button
                className={clsx(styles.interactButton, { [styles.active]: isSidebarExpanded })}
                onClick={handleLogout}
                aria-label='Logout'
              >
                <IconWrapper width='24px' height='24px' cursor='pointer'>
                  <SignOutIcon />
                </IconWrapper>
                <span>Logout</span>
              </button>
            )}
          </div>
          <footer className={clsx(styles.copyright, { [styles.active]: isSidebarExpanded })}>
            copyright © {new Date().getFullYear()} Teameights.
          </footer>
        </nav>
      </aside>
    </>
  );
};
