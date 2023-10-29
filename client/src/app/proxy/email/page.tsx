'use client';
import { Flex, Typography } from '@/shared/ui';
import { RaceBy } from '@uiball/loaders';
import { useSearchParams } from 'next/navigation';
import { useConfirmEmail } from '@/entities/session/model/queries/useConfirmEmail';
import { useEffect } from 'react';

export default function EmailPage() {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') ?? ''; // default value is ""
  const { mutate: confirmEmail } = useConfirmEmail();

  useEffect(() => {
    if (hash) confirmEmail({ hash });
  }, [hash, confirmEmail]);

  useConfirmEmail();
  return (
    <Flex direction='column' align='center' justify='center' gap={32}>
      <RaceBy size={237} speed={1.9} color='var(--green-bright-color)' />
      <Typography size='heading_m'>Email confirmation...</Typography>
    </Flex>
  );
}
