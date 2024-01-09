'use client';
import styles from './layout.module.scss';

import { ReactNode } from 'react';

export default function LayoutChat({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
