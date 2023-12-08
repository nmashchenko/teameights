'use client';

import { Flex } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import { AccountType } from './ui/steps/accout-type/accout-type';
import styles from './onboarding.module.scss';

const OnboardingPage = () => {
  return (
    <Flex width={'100vw'} height={'100dvh'}>
      <ProgressSection>
        <Flex direction='column' flex={1}>
          <Flex align='center' flex={1}>
            Image
          </Flex>
          <div className={styles.spacer}>Description</div>
        </Flex>
      </ProgressSection>
      <ActionSection stepTitle={'Step Title'}>
        <AccountType />
      </ActionSection>
    </Flex>
  );
};

export default OnboardingPage;
