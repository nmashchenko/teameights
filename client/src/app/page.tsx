'use client';

import { Typography } from 'shared/ui';

export default function Home() {
  return (
    <>
      <Typography size='heading_xl' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>
    </>
  );
}
