'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

import { IconWrapper } from '@/shared/ui';
import { BurgerCloseIcon, LogoSmall, SignOutIcon, SignInIcon } from '@/shared/assets';
import { useClickOutside } from '@/shared/lib';
import { getSidebarItems } from '../../config/getSidebarItems';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import { SidebarProfile } from '../sidebar-profile/sidebar-profile';
import { SidebarNotificationsContent } from '../notification-content/notification-content';

import styles from './sidebar.module.scss';
import { useGetMe, useLogout } from '@/entities/session';
import { LOGIN } from '@/shared/constant';
import { useGetNotifications } from '@/entities/session/api/useGetNotifications';
import { useSocketConnection } from '@/widgets/sidebar/lib/hooks/useListenToNotifications';

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: user } = useGetMe();
  const { data: notifications } = useGetNotifications();
  const { mutate: logoutUser } = useLogout();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  const isSignedUp = !!user?.username;

  // TODO: FIX THAT so only one connection to websocket exists
  useSocketConnection(user);

  const sidebarItemsData = React.useMemo(() => {
    return getSidebarItems(user);
  }, [user]);

  const navigateToPath = (path: string) => {
    router.push(path);
  };

  const navMenuRef = useClickOutside(
    notificationModal ? () => '' : () => setIsSidebarExpanded(false)
  );

  const handleLogout = () => {
    logoutUser();
  };

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
          <BurgerCloseIcon />
        </div>
      </button>

      <aside className={clsx(styles.sidebarWrapper, { [styles.active]: isSidebarExpanded })}>
        <nav
          ref={navMenuRef}
          onClick={e => e.stopPropagation()}
          className={clsx(styles.menu, { [styles.active]: isSidebarExpanded })}
          aria-label='Sidebar Navigation'
        >
          <div className={styles.toggle}>
            <div className={clsx(styles.logo, { [styles.active]: isSidebarExpanded })}>
              <LogoSmall />
            </div>
            <button
              className={clsx(styles.close, { [styles.active]: isSidebarExpanded })}
              onClick={handleShowSidebar}
              aria-label='Toggle sidebar'
            >
              <BurgerCloseIcon aria-hidden='true' />
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
            {isSignedUp && user && (
              <SidebarNotificationsContent
                userNotifications={notifications?.data}
                isSidebarExpanded={isSidebarExpanded}
                notificationModal={notificationModal}
                setNotificationModal={setNotificationModal}
              />
            )}
            {!user ? (
              <button
                className={clsx(styles.interactButton, { [styles.active]: isSidebarExpanded })}
                onClick={() => navigateToPath(LOGIN)}
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
                <span>Log out</span>
              </button>
            )}
          </div>
          <footer className={clsx(styles.copyright, { [styles.active]: isSidebarExpanded })}>
            copyright © {new Date().getFullYear()} Teameights
          </footer>
        </nav>
      </aside>
    </>
  );
};
