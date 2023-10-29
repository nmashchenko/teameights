'use client';
import { Flex, Typography } from '@/shared/ui';
import { RaceBy } from '@uiball/loaders';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGithub } from '@/entities/session/model/queries/useGithub';

export default function GithubPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? ''; // default value is ""
  const { mutate: confirmGithub } = useGithub();

  useEffect(() => {
    if (code) confirmGithub({ code });
  }, [code, confirmGithub]);

  return (
    <Flex direction='column' align='center' justify='center' gap={32}>
      <RaceBy size={237} speed={1.9} color='var(--green-bright-color)' lineWeight={8} />
      <Typography size='heading_m'>Logging via github...</Typography>
    </Flex>
  );
}
