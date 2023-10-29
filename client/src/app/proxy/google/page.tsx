'use client';
import { Flex, Typography } from '@/shared/ui';
import { RaceBy } from '@uiball/loaders';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGoogle } from '@/entities/session/model/queries/useGoogle';

export default function GooglePage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? ''; // default value is ""
  const { mutate: confirmGoogle } = useGoogle();

  useEffect(() => {
    if (code) confirmGoogle({ code });
  }, [code, confirmGoogle]);

  return (
    <Flex direction='column' align='center' justify='center' gap={32}>
      <RaceBy size={237} speed={1.9} color='var(--green-bright-color)' lineWeight={8} />
      <Typography size='heading_m'>Logging via google...</Typography>
    </Flex>
  );
}
