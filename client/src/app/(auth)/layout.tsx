'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { LogoBig, LogoSmall } from '@/shared/assets';
import { Flex, Tabs } from '@/shared/ui';
import styles from './styles.module.scss';
import { useGetScreenWidth } from '@/shared/lib';

const baseLayouts = ['confirmation', 'expired', 'success'];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const width = useGetScreenWidth();
  const pathname = usePathname();
  const options = ['Login', 'Sign Up'];
  const [tab, setTab] = useState(options[0]);

  const handleBack = () => {
    router.push('/');
  };
  const handleChange = (option: string) => {
    setTab(option);
    router.push(`/${option.toLowerCase().replace(/\s/g, '')}`);
  };

  const header = (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleBack}>
        {width > 420 ? <LogoBig /> : <LogoSmall />}
      </div>
      <div className={styles.headerNormalizer}>
        <Tabs options={options} currentTab={tab} onTabChange={handleChange} />
      </div>
    </header>
  );

  const basic = (
    <div className={styles.container}>
      {header}
      <Flex
        className={styles.children}
        direction='column'
        justify='center'
        align='center'
        width='100%'
      >
        {children}
      </Flex>
    </div>
  );

  const alternative = (
    <Flex className={styles.alternative}>
      <div className={styles.left}>
        {header}
        <Flex className={styles.children} direction='column' justify='center' align='center'>
          {children}
        </Flex>
      </div>
      <img className={styles.right} src='https://dummyimage.com/4000x4000' alt='Main image' />
    </Flex>
  );

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_OAUTH_TOKEN}`}>
      {baseLayouts.includes(pathname.split('/').at(-1) || '') ? basic : alternative}
    </GoogleOAuthProvider>
  );
}
