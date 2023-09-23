import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

import styles from './sidebar-item.module.scss';

interface SidebarItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  active: boolean;
  path: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
}

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
