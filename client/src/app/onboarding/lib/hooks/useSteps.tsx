import { AccountType } from '@/app/onboarding/ui/steps/accout-type/accout-type';
import { PersonalInfo } from '@/app/onboarding/ui/steps/personal-info/personal-info';
import { Specialty } from '@/app/onboarding/ui/steps/specialty/specialty';
import { IconsSelector } from '@/app/onboarding/ui/steps/icons-selector/icons-selector';
import {
  designerTools,
  frameworks,
  managerTools,
  methodologies,
  programmingLanguages,
  recommendedLanguages,
} from '@/shared/constant';
import { SocialLinks } from '@/app/onboarding/ui/steps/social-links/social-links';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { StepProps } from '@/app/onboarding/page';

interface SpecificStepProps {
  [role: string]: StepProps[];
}

// TODO: move this to lib/contants as well as other steps for each speciality
const commonSteps = [
  { step: <AccountType />, title: 'Account type', centered: true, submissionStep: false },
  { step: <PersonalInfo />, title: 'Personal info', centered: true, submissionStep: false },
  { step: <Specialty />, title: 'Speciality', centered: true, submissionStep: false },
];

export const useSteps = () => {
  const [step, setStep] = useState(0);
  const { watch, setValue } = useFormContext();
  const router = useRouter();
  const handleNext = () => {
    const accountType = watch('accountType');
    const speciality = watch('speciality');

    const designerSteps = [
      ...commonSteps,
      {
        step: (
          <IconsSelector
            icons={designerTools}
            formFieldToUpdate='coreTools'
            description='All Tools'
          />
        ),
        title: 'Tools',
        centered: false,
        submissionStep: false,
      },
      { step: <SocialLinks />, title: 'Links', centered: true, submissionStep: true },
    ];

    const managerSteps = [
      ...commonSteps,
      {
        step: (
          <IconsSelector
            icons={managerTools}
            formFieldToUpdate='coreTools'
            description='All Tools'
          />
        ),
        title: 'Tools',
        centered: false,
        submissionStep: false,
      },
      {
        step: (
          <IconsSelector
            icons={methodologies}
            formFieldToUpdate='additionalTools'
            description='All methodologies'
            type='text'
          />
        ),
        title: 'Methodologies',
        centered: false,
        submissionStep: false,
      },
      { step: <SocialLinks />, title: 'Links', centered: true, submissionStep: true },
    ];

    const defaultSteps = [
      ...commonSteps,
      {
        step: (
          <IconsSelector
            icons={programmingLanguages}
            recommendedIcons={recommendedLanguages}
            formFieldToUpdate='coreTools'
            description='All Languages'
          />
        ),
        title: 'Languages',
        centered: false,
        submissionStep: false,
      },
      {
        step: (
          <IconsSelector
            icons={frameworks}
            formFieldToUpdate='additionalTools'
            description='All Frameworks'
            type='text'
          />
        ),
        title: 'Frameworks',
        centered: false,
        submissionStep: false,
      },
      { step: <SocialLinks />, title: 'Links', centered: true, submissionStep: true },
    ];

    switch (step) {
      case 0:
        if (accountType === 'Company') {
          router.push('/onboarding/company');
        } else {
          setValue('steps', commonSteps);
        }
        break;

      case 2:
        const specialitySteps: SpecificStepProps = {
          Designer: designerSteps,
          'Project Manager': managerSteps,
          default: defaultSteps,
        };

        const specificSteps = specialitySteps[speciality] ?? specialitySteps.default;

        setValue('steps', specificSteps);
        break;

      default:
        break;
    }

    if (accountType !== 'Company') {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step - 1 >= 0) {
      setStep(prev => prev - 1);
    }
  };

  return { step, setStep, handleNext, handleBack };
};
