'use client';

import { Flex, Typography } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import styles from './onboarding.module.scss';
import { useSteps } from './lib/hooks/useSteps';
import { useFormContext } from 'react-hook-form';

const OnboardingPage = () => {
  const { step, handleNext, handleBack } = useSteps();
  const { watch } = useFormContext();
  const steps = watch('steps');

  return (
    <Flex width={'100%'} height={'100%'}>
      <ProgressSection step={step}>
        <Flex direction='column' flex={1} width='100%'>
          <Flex align='center' flex={1} width='100%'>
            {/*TODO: CHANGE THIS FOR ILLUSTRATIONS*/}
            {steps[step].meta.illustration}
          </Flex>
        </Flex>
      </ProgressSection>
      <ActionSection step={step} handleNext={handleNext} handleBack={handleBack} />
    </Flex>
  );
};

export default OnboardingPage;
