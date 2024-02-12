'use client';
import styles from './layout.module.scss';

import { Sidebar } from '@/widgets/sidebar';
import { useGetMe } from '@/entities/session';
import { useGetNotifications } from '@/entities/session/api/useGetNotifications';
import { useSocketConnection } from '@/widgets/sidebar/lib/hooks/useListenToNotifications';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { data: user } = useGetMe();
  const { data: notifications } = useGetNotifications();

  useSocketConnection(user);

  return (
    <div className={styles.container}>
      <Sidebar user={user} notifications={notifications} />
      <div className={styles.children}>
        <div>12112asd3 nikita</div>
        {children}
      </div>
    </div>
  );
}
