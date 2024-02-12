'use client';
import { Info } from '../ui/info';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGoogle } from '@/entities/session';

export default function GooglePage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? ''; // default value is ""
  const { mutate: confirmGoogle } = useGoogle();

  useEffect(() => {
    if (code) confirmGoogle({ code });
  }, [code, confirmGoogle]);

  return <Info text='Logging via google...' />;
}
