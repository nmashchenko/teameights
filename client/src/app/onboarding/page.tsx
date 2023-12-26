'use client';

import { Flex } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import styles from './onboarding.module.scss';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { AccountType } from '@/app/onboarding/ui/steps/accout-type/accout-type';

export interface StepProps {
  step: JSX.Element;
  title: string;
}

interface OnboardingProps {
  steps: StepProps[];
  accountType: string;
  username: string;
  fullName: string;
  dateOfBirth: Date;
  country: string;
  focus: string;
  coreTools: string[];
  additionalTools: string[];
  experience: string; // все что в experienceValues бекенд валидирует
  speciality: string; // все что в specialityValues, бекенд имеет валидацию
  isLeader: boolean;
  github: string; // имеет валидацию на бэке
  behance: string; // имеет валидацию на бэке
  linkedIn: string; // имеет валидацию на бэке
  telegram: string; // имеет валидацию на бэке
}

const OnboardingPage = () => {
  // TODO: move this logic into separate hook
  const [step, setStep] = useState(0);
  const methods = useForm<OnboardingProps>({
    defaultValues: {
      steps: [{ step: <AccountType />, title: 'Account type' }],
    },
  });

  const onSubmit = () => console.log('23');

  return (
    <Flex width={'100%'} height={'100%'}>
      <FormProvider {...methods}>
        <ProgressSection step={step}>
          <Flex direction='column' flex={1}>
            <Flex align='center' flex={1}>
              content here
              {/*<iframe*/}
              {/*  width='560'*/}
              {/*  height='315'*/}
              {/*  src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=qNDUUJTLFKpfuqxR'*/}
              {/*  title='YouTube video player'*/}
              {/*  frameBorder='0'*/}
              {/*  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'*/}
              {/*  allowFullScreen*/}
              {/*></iframe>*/}
            </Flex>
            <div className={styles.spacer}>Толик лох</div>
          </Flex>
        </ProgressSection>

        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
          <ActionSection step={step} setStep={setStep} />
        </form>
      </FormProvider>
    </Flex>
  );
};

export default OnboardingPage;
