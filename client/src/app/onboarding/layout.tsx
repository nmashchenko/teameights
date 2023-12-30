'use client';
import { ReactNode } from 'react';
import styles from './onboarding.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { accountTypeStep } from '@/app/onboarding/lib/const/steps';
import { StepProps } from '@/app/onboarding/lib/const/steps';
import { useUpdateMe } from '@/entities/session';
import { IOption } from '@/shared/interfaces';
import { ExperienceType, IUserRequest } from '@teameights/types';

interface OnboardingProps {
  steps: StepProps[];
  accountType: string;
  username: string;
  fullName: string;
  dateOfBirth: Date;
  country: string;
  focus: string;
  coreTools: IOption[];
  additionalTools: IOption[];
  experience: string;
  speciality: string;
  isLeader: boolean;
  github: string;
  behance: string;
  linkedIn: string;
  telegram: string;
}

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  const { mutate: updateUser } = useUpdateMe();

  const methods = useForm<OnboardingProps>({
    defaultValues: {
      steps: [accountTypeStep],
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

  const onSubmit = methods.handleSubmit(data => {
    let type = '';

    switch (data.speciality) {
      case 'Developer':
        type = 'dev';
        break;
      case 'Designer':
        type = 'designer';
        break;
      case 'Project Manager':
        type = 'pm';
        break;
    }

    const updateRequest: IUserRequest = {
      fullName: data.fullName,
      username: data.username,
      isLeader: data.isLeader,
      country: data.country,
      experience: data.experience as ExperienceType,
      dateOfBirth: new Date(data.dateOfBirth),
      skills: {
        __type: type as 'dev' | 'designer' | 'pm',
        speciality: data.speciality,
        focus: data.focus,
        coreTools: data.coreTools.map(tool => tool.label),
        additionalTools: data?.additionalTools?.length
          ? data.additionalTools.map(tool => tool.label)
          : undefined,
      },
      links: {
        behance: data.behance && data.behance,
        linkedIn: data.linkedIn && data.linkedIn,
        telegram: data.telegram && data.telegram,
        github: data.github && data.github,
      },
    };

    updateUser(updateRequest);
  });

  // TODO: add validations on each step (required / min amount of characters / etc)
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className={styles.container}>
        {children}
      </form>
    </FormProvider>
  );
}
