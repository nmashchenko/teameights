import styles from './Layout.module.scss';
import { Sidebar } from '@/widgets/sidebar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.children}>{children}</div>
    </div>
  );
}
