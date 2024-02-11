'use client';
import { IllustrationStatus } from '../../../ui';
import { useRouter } from 'next/navigation';

export default function Confirmation() {
  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };
  return (
    <IllustrationStatus
      mainText='Check your email'
      subText='If your email is on file, we will send a reset link'
      buttonText='Back'
      buttonHandler={handleBack}
    />
  );
}
