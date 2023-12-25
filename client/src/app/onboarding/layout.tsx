import { ReactNode } from 'react';
import styles from './onboarding.module.scss';

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
