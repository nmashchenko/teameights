'use client';

import { Flex } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import styles from './onboarding.module.scss';
import { useState } from 'react';

const OnboardingPage = () => {
  // TODO: move this logic into separate hook
  const [step, setStep] = useState(0);

  return (
    <Flex width={'100vw'} height={'100dvh'}>
      <ProgressSection step={step}>
        <Flex direction='column' flex={1}>
          <Flex align='center' flex={1}>
            {/*TODO: remove this lol*/}
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=qNDUUJTLFKpfuqxR'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </Flex>
          <div className={styles.spacer}>Толик лох</div>
        </Flex>
      </ProgressSection>

      <ActionSection step={step} setStep={setStep} />
    </Flex>
  );
};

export default OnboardingPage;
