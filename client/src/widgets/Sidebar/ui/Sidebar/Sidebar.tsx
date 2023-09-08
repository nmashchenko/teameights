'use client';

import { useState } from 'react';

import styles from './Sidebar.module.scss';
import { clsx } from 'clsx';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={clsx(styles.Sidebar, { [styles.collapsed]: collapsed })}>
      <div>
        <button onClick={onToggle}>Btn</button>
      </div>
      <div className={styles.items}>123</div>
    </div>
  );
};
