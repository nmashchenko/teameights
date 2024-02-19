'use client';
import styles from './layout.module.scss';
import { useGetMe } from '@/entities/session';
import { Header } from './ui/header/header';
import { CardSkeleton, Flex } from '@/shared/ui';
import { List } from './ui/list/list';
import { About } from './ui/about/about';
import { useParams } from 'next/navigation';
import { Friends } from './ui/friends/friends';
import { Fields } from './ui/fields/fields';
import { useGetUserByName } from './lib/useGetUserByName';
import { ProfileContext } from './lib/profile-context';

export default function Page() {
  const { data: me } = useGetMe();
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);
  const isMyProf = me?.username === username;

  let body = (
    <Flex direction='column' gap='30px'>
      <CardSkeleton borderRadius={15} width={'100%'} height={'227px'} />
      <CardSkeleton borderRadius={15} width={'100%'} height={'227px'} />
    </Flex>
  );

  if (user) {
    body = (
      <>
        <Header />
        <Flex padding='0 0 48px 0' direction='column' gap='30px'>
          <Flex className={styles.profile_row} gap='30px'>
            <List />
            <About />
          </Flex>
          <Flex className={styles.profile_row} gap='30px'>
            <Friends />
            <Fields />
          </Flex>
        </Flex>
      </>
    );
  }

  return <ProfileContext.Provider value={isMyProf}> {body} </ProfileContext.Provider>;
}
