import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

import styles from './sidebar-item.module.scss';

export interface SidebarItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * Determines the visual state of the title. If true, the title is fully visible.
   */
  active: boolean;
  /**
   * The URL path to which the component's link should point.
   */
  path: string;
  /**
   * The icon to be displayed alongside the title.
   */
  icon: React.ReactNode;
  /**
   * The text to be displayed as the item's title.
   */
  title: string;
  /**
   * Determines the visual state of the entire item. If true, a background color is applied.
   */
  isActive: boolean;
}

/**
 * The SidebarItem component represents a navigational item within a sidebar.
 * It encapsulates a link, an icon, and a title, providing a visual indication of its active state.
 *
 * Example for usage:
 *
 * ```tsx
 * import { SidebarItem } from './SidebarItem';
 * import { HomeIcon } from 'shared/assets';
 *
 * <SidebarItem
 *   active={true}
 *   path="/home"
 *   icon={<HomeIcon />}
 *   title="Home"
 *   isActive={true}
 * />
 * ```
 */
export const SidebarItem: React.FC<SidebarItemProps> = props => {
  const { active, path, icon, title, isActive, ...rest } = props;
  return (
    <li {...rest}>
      <Link href={path} className={clsx(styles.wrapper, { [styles.active]: isActive })}>
        <span className={styles.icon}>{icon}</span>
        <span className={clsx(styles.title, { [styles.active]: active })}>{title}</span>
      </Link>
    </li>
  );
};
