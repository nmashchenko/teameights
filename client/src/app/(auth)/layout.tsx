'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { LogoBig, LogoSmall } from '@/shared/assets';
import { Flex, Tabs } from '@/shared/ui';
import styles from './styles.module.scss';
import { useGetScreenWidth } from '@/shared/lib';
import Image from 'next/image';

const baseLayouts = ['confirmation', 'expired', 'success', 'processing'];

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
      <Tabs options={options} currentTab={tab} onTabChange={handleChange} />
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
      <Image
        src='/images/team8s.png'
        width={0}
        height={0}
        alt={'Teameights screen'}
        sizes='100vw'
        className={styles.right}
        priority
      />
    </Flex>
  );

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_OAUTH_TOKEN}`}>
      {baseLayouts.includes(pathname.split('/').at(-1) || '') ? basic : alternative}
    </GoogleOAuthProvider>
  );
}
