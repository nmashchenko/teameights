'use client';

import { Flex, Typography, Skeleton } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';
import { Crown } from '@/shared/assets';

export default function Home() {
  const width = useGetScreenWidth();

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <div> The screen width is: {width} </div>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <Flex direction='column' gap='200px'>
        <Flex gap='30px'>
          <Skeleton width={70} height={70} />
          <Skeleton width={70} height={70} />
        </Flex>
      </Flex>

      <Crown width={70} height={70} />
    </>
  );
}
