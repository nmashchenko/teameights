'use client';
import { IllustrationStatus } from '../../ui';
import { useRouter } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  return (
    <IllustrationStatus
      mainText='Password reset successful'
      subText='You can now log in to your account using your new password'
      buttonText='Log in'
      buttonHandler={() => router.push('/login')}
    />
  );
}
