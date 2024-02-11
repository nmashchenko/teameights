'use client';
import styles from './layout.module.scss';
import { useGetMe } from '@/entities/session';
import { Header } from './ui/header';
import { CardSkeleton, Flex, Typography } from '@/shared/ui';
import { List } from './ui/list';
import { About } from './ui/about';
import { ArrowLeftIcon, LogoBig } from '@/shared/assets';
import { useRouter, useParams } from 'next/navigation';
import { Friends } from './ui/friends';
import { Fields } from './ui/fields';
import { useGetUserByName } from './lib/useGetUserByName';
import { ProfileContext } from './lib/profile-context';

export default function Layout() {
  const { data: me } = useGetMe();
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);

  const router = useRouter();
  const isMyProf = me?.username === username;

  let body = <CardSkeleton borderRadius={15} width={'100%'} height={'227px'} />;
  if (user && me) {
    body = (
      <>
        <Header />
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
      </>
    );
  }

  return (
    <ProfileContext.Provider value={isMyProf}>
      <div className={styles.container}>
        <Flex direction={'column'} width={'100%'} gap={'30px'} position='relative'>
          <button onClick={router.back} className={styles.back}>
            <ArrowLeftIcon />
            <Typography>Back</Typography>
          </button>
          <Flex justify='center'>
            <LogoBig />
          </Flex>
          {body}
        </Flex>
      </div>
    </ProfileContext.Provider>
  );
}
