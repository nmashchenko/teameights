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

const withDesignerSteps = [...commonSteps, ...designerSteps, linksStep];

const withManagerSteps = [...commonSteps, ...projectManagerSteps, linksStep];

const withDefaultSteps = [...commonSteps, ...developerSteps, linksStep];

export const useSteps = () => {
  const [step, setStep] = useState(0);
  const { watch, setValue, trigger, setError } = useFormContext();
  const router = useRouter();

  const handleNext = async () => {
    const accountType: string = watch('accountType');
    const speciality: string = watch('speciality');
    const coreTools: string[] = watch('coreTools');
    const additionalTools: string[] = watch('additionalTools');

    switch (step) {
      case 0:
        if (!accountType) {
          setError('accountType', { type: 'custom', message: 'should not be empty!' });
          return;
        }

        if (accountType === 'Company') {
          router.push('/onboarding/company');
        } else {
          setValue('steps', commonSteps);
        }
        break;
      case 1: {
        const clearStepOne = await trigger(['country', 'fullName', 'username', 'dateOfBirth']);
        if (!clearStepOne) return;
        break;
      }

      case 2: {
        const clearStepTwo = await trigger(['speciality', 'focus', 'experience']);
        if (!clearStepTwo) return;

        const specialitySteps: SpecificStepProps = {
          Designer: withDesignerSteps,
          'Project Manager': withManagerSteps,
          default: withDefaultSteps,
        };

        const specificSteps = specialitySteps[speciality] ?? specialitySteps.default;

        setValue('steps', specificSteps);
        break;
      }

      case 3: {
        if (!coreTools.length) {
          setError('coreTools', { type: 'custom', message: 'Select at least 1' });
          return;
        }
        break;
      }

      case 4: {
        if (!additionalTools.length) {
          setError('additionalTools', { type: 'custom', message: 'Select at least 1' });
          return;
        }
        break;
      }
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
