'use client';
import { IllustrationStatus } from '../../../ui';
import { useRouter } from 'next/navigation';

export default function Expired() {
  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };
  return (
    <IllustrationStatus
      mainText='Sorry, the link has expired'
      subText='This link expires after 15 minutes and can be used once.'
      buttonText='Back'
      buttonHandler={handleBack}
    />
  );
}
