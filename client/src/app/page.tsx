'use client';

import { Flex, Typography, Skeleton } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';
import { Crown } from '@/shared/assets';
import { IUserRequest } from 'teameights-types';

export default function Home() {
  const width = useGetScreenWidth();
  const user: IUserRequest = { username: 'nmashchenko' };

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <div> The screen width is: {width} </div>

      <Typography>Hello, {user.username}!</Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <Flex direction='column' gap='200px' width='100%' justify='center' align='center'>
        <Flex gap='150px'>
          <Skeleton width={70} height={70} />
          <Skeleton width={70} height={70} />
        </Flex>
      </Flex>

      <Crown width={70} height={70} />
    </>
  );
}
