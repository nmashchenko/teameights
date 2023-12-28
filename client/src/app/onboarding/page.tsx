'use client';

import { Flex, Typography } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import styles from './onboarding.module.scss';
import { useSteps } from './lib/hooks/useSteps';

export interface StepProps {
  step: JSX.Element;
  title: string;
  centered: boolean;
  submissionStep: boolean;
  // details: string;
  // description: string;
}

const OnboardingPage = () => {
  const { step, handleNext, handleBack } = useSteps();

  return (
    <Flex width={'100%'} height={'100%'}>
      <ProgressSection step={step}>
        <Flex direction='column' flex={1}>
          <Flex align='center' flex={1}>
            {/*TODO: CHANGE THIS FOR ILLUSTRATIONS*/}
            <div style={{ width: '100%', height: '400px', background: '#D9D9D9' }} />
          </Flex>
        </Flex>
      </ProgressSection>
      <ActionSection step={step} handleNext={handleNext} handleBack={handleBack} />
    </Flex>
  );
};

export default OnboardingPage;
