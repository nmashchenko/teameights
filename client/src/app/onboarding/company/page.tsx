'use client';
import { IllustrationStatus } from '@/app/ui';
import { useRouter } from 'next/navigation';
import { Flex } from '@/shared/ui';

export default function Company() {
  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };
  return (
    <Flex height='100%' width='100%' justify='center' align='center'>
      <IllustrationStatus
        mainText='Company Registrations'
        subText='We will send you an email as soon as this feature appears'
        buttonText='Back'
        buttonHandler={handleBack}
      />
    </Flex>
  );
}
