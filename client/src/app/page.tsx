'use client';

import { Typography } from 'shared/ui';
import { CookieBanner } from 'features/cookie-banner';

export default function Home() {
  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <div>
        <CookieBanner />
      </div>
    </>
  );
}
