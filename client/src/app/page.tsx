'use client';

import { Typography } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';

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
    </>
  );
}
