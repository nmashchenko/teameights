'use client';

import { Flex } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import styles from './onboarding.module.scss';
import { PersonalInfo } from './ui/steps/personal-info/personal-info';
import { SocialLinks } from './ui/steps/social-links/social-links';
// import { AccountType } from './ui/steps/accout-type/accout-type';
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
        <SocialLinks />
      </ActionSection>
    </Flex>
  );
};

export default OnboardingPage;
