'use client';
import { useSearchParams } from 'next/navigation';
import { useConfirmEmail } from '@/entities/session';
import { useEffect } from 'react';
import { Info } from '@/app/proxy/ui/info';

export default function EmailPage() {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') ?? ''; // default value is ""
  const { mutate: confirmEmail } = useConfirmEmail();

  useEffect(() => {
    if (hash) confirmEmail({ hash });
  }, [hash, confirmEmail]);

  return <Info text='Confirming email...' size={214} />;
}
