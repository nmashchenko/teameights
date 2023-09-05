'use client';

import { Typography, TypographySize, TypographyVariants } from 'shared/ui/typography/ui';

export default function Home() {
  return (
    <>
      <Typography size={TypographySize.Body_XL} variant={TypographyVariants.h6}>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>
    </>
  );
}
