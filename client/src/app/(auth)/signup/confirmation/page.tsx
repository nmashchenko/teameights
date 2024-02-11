'use client';
import { IllustrationStatus } from '@/app/ui';
import { useRouter } from 'next/navigation';

export default function Confirmation() {
  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };
  return (
    <IllustrationStatus
      mainText='Check your email'
      subText='We sent you the registration link'
      buttonText='Back'
      buttonHandler={handleBack}
    />
  );
}
