'use client';

import { Typography } from 'shared/ui';
import Link from 'next/link';
import { useTranslation } from 'shared/i18n/client';

interface Props {
  params: { lng: string };
}

export default function Home({ params: { lng } }: Props) {
  const { t } = useTranslation(lng);
  return (
    <>
      <Link href={`/${lng}/login`}>Login</Link>
      <Typography size='heading_l' variant='h6'>
        {t('title')}
      </Typography>

      <a href='/login' style={{ color: 'green' }}>
        {t('to-login-page')}
      </a>
    </>
  );
}
