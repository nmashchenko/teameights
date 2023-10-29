import { ReactNode } from 'react';
import { Flex } from '@/shared/ui';
import styles from './proxy.module.scss';
import { LogoBig } from '@/shared/assets';
import Link from 'next/link';

export default function ProxyLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Flex width='100%' justify='center' align='center'>
        <Link className={styles.logo} href='/'>
          <LogoBig />
        </Link>
      </Flex>
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
}
