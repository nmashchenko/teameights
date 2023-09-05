'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft } from 'shared/assets/Icons/Arrows/ArrowLeft';
import { LogoBig } from 'shared/assets/Icons/Logo/LogoBig';
import { Button, Tabs } from 'shared/ui';
import styles from './Layout.module.scss';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const options = ['Login', 'Sign Up'];
  const [tab, setTab] = useState(options[0]);

  const handleChange = (option: string) => {
    setTab(option);
    router.push(option.toLowerCase().replace(/\s/g, ''));
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_OAUTH_TOKEN}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Button onClick={handleBack} typeBtn='tertiary' content='text_button'>
            <ArrowLeft />
            <span>Back</span>
          </Button>
          <div className={styles.logo}>
            <LogoBig />
          </div>
          <Tabs options={options} currentTab={tab} onTabChange={handleChange} />
        </header>

        <div className={styles.children}>{children}</div>
      </div>
    </GoogleOAuthProvider>
  );
}
