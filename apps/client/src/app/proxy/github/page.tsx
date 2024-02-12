'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGithub } from '@/entities/session';
import { Info } from '@/app/proxy/ui/info';

export default function GithubPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? ''; // default value is ""
  const { mutate: confirmGithub } = useGithub();

  useEffect(() => {
    if (code) confirmGithub({ code });
  }, [code, confirmGithub]);

  return <Info text='Logging via github...' />;
}
