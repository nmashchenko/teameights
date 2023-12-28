'use client';
import { ReactNode } from 'react';
import styles from './onboarding.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountType } from '@/app/onboarding/ui/steps/accout-type/accout-type';
import { StepProps } from '@/app/onboarding/page';

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

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  const methods = useForm<OnboardingProps>({
    defaultValues: {
      steps: [
        { step: <AccountType />, title: 'Account type', centered: true, submissionStep: false },
      ],
      accountType: '',
      username: '',
      fullName: '',
      country: '',
      focus: '',
      coreTools: [],
      additionalTools: [],
      experience: '',
      speciality: '',
      isLeader: false,
      github: '',
      behance: '',
      linkedIn: '',
      telegram: '',
    },
  });

  const onSubmit = () => console.log('23');

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.container}>
        {children}
      </form>
    </FormProvider>
  );
}
