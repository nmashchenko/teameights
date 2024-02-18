'use client';
import styles from './layout.module.scss';
import { Flex, Typography } from '@/shared/ui';
import { ArrowLeftIcon, LogoBig } from '@/shared/assets';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Flex direction={'column'} width={'100%'} gap={'30px'} position='relative'>
        <button onClick={router.back} className={styles.back}>
          <ArrowLeftIcon />
          <Typography>Back</Typography>
        </button>
        <Flex justify='center'>
          <LogoBig />
        </Flex>
        {children}
      </Flex>
    </div>
  );
}
