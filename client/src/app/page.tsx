'use client';

import { Typography } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';

import { useGetMe } from '@/entities/session/model/queries/useGetMe';

export default function Home() {
  const width = useGetScreenWidth();
  const { data } = useGetMe();

  console.log(data);

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <div> The screen width is: {width} </div>

      <Typography>Hello, {data?.fullName || 'failed to fetch'}!</Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>
    </>
  );
}
