'use client';
import styles from './layout.module.scss';
import { useGetMe } from '@/entities/session';
import { Header } from './ui/header';
import { Flex } from '@/shared/ui';
import { List } from './ui/list';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { About } from './ui/about';
export default function Layout() {
  const { data: user } = useGetMe();

  let body = <Skeleton borderRadius={'15px'} width={'100%'} height={'227px'} />;
  if (user) {
    body = (
      <Flex gap={'30px'}>
        <List />
        <About />
      </Flex>
    );
  }
  return (
    <div className={styles.container}>
      <Flex direction={'column'} width={'100%'} gap={'30px'}>
        <Header />
        {body}
      </Flex>
    </div>
  );
}
