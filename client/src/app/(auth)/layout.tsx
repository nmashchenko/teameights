'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { ArrowLeft, LogoBig } from 'shared/assets';
import { Button, Tabs } from 'shared/ui';

import styles from './styles.module.scss';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const options = ['Login', 'Sign Up'];
  const [tab, setTab] = useState(options[0]);

  const handleChange = (option: string) => {
    setTab(option);
    router.push(`/${option.toLowerCase().replaceAll(/\s/g, '')}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_OAUTH_TOKEN}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerNormalizer}>
            <Button onClick={handleBack} typeBtn='tertiary' content='text_button'>
              <ArrowLeft />
              <span>Back</span>
            </Button>
          </div>
          <div className={styles.logo}>
            <LogoBig />
          </div>
          <div className={styles.headerNormalizer}>
            <Tabs options={options} currentTab={tab} onTabChange={handleChange} />
          </div>
        </header>

        <div className={styles.children}>{children}</div>
      </div>
    </GoogleOAuthProvider>
  );
}
