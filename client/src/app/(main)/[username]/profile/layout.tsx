'use client';
import styles from './layout.module.scss';
import { useGetMe } from '@/entities/session';
import { Header } from './ui/header';
import { Flex, Typography } from '@/shared/ui';
import { List } from './ui/list';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { About } from './ui/about';
import { ArrowLeftIcon, LogoBig } from '@/shared/assets';
import { useRouter, useParams } from 'next/navigation';
import { Friends } from './ui/Friends';
import { Fields } from './ui/fields';
export default function Layout() {
  const { data: user } = useGetMe();
  const router = useRouter();
  const { username } = useParams();

  const isMyProfile = user?.username === username;

  let body = <Skeleton borderRadius={'15px'} width={'100%'} height={'227px'} />;
  if (user) {
    body = (
      <Flex direction='column' gap='30px'>
        <Flex gap='30px'>
          <List />
          <About />
        </Flex>
        <Flex gap='30px'>
          <Friends />
          <Fields />
        </Flex>
      </Flex>
    );
  }

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
        <Header />
        {body}
      </Flex>
    </div>
  );
}
