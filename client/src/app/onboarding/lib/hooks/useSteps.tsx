import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  accountTypeStep,
  designerSteps,
  developerSteps,
  linksStep,
  personalInfoStep,
  projectManagerSteps,
  specialityStep,
  StepProps,
} from '@/app/onboarding/lib/const/steps';

interface SpecificStepProps {
  [role: string]: StepProps[];
}

const commonSteps = [accountTypeStep, personalInfoStep, specialityStep];

export const useSteps = () => {
  const [step, setStep] = useState(0);
  const { watch, setValue } = useFormContext();
  const router = useRouter();
  const handleNext = () => {
    const accountType = watch('accountType');
    const speciality = watch('speciality');

    const withDesignerSteps = [...commonSteps, ...designerSteps, linksStep];

    const withManagerSteps = [...commonSteps, ...projectManagerSteps, linksStep];

    const withDefaultSteps = [...commonSteps, ...developerSteps, linksStep];

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
          Designer: withDesignerSteps,
          'Project Manager': withManagerSteps,
          default: withDefaultSteps,
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
