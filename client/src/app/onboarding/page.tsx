'use client';

import { Flex } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import { useForm, FormProvider, UseFormGetValues } from 'react-hook-form';
import { useState } from 'react';
import { steps as DEFAULT_STEPS } from './steps';
import { occupations } from '@/app/onboarding/occupations';
import { SelectFields } from '@/app/onboarding/step/select-fields';
import { recommendedLanguages, fields } from '@/shared/constant';
import { recommendedDesignerTools } from '@/shared/constant/recommended-designer-tools';

const SPECIALITY_STEP = 2;
const FIELDS_STEP_ONE = 3;

interface Option {
  label: string;
  value: string;
}

interface FormValues {
  occupation?: 'designer' | 'developer' | 'manager';
  specialty?: keyof typeof recommendedLanguages;
  frameworks?: Option[];
  languages?: Option[];
  fields?: Option[];
}

function useSteps(getValues: UseFormGetValues<FormValues>) {
  const [steps, setSteps] = useState(DEFAULT_STEPS);
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step + 1 <= steps.length - 1) {
      const { languages, occupation, specialty, fields } = getValues();
      if (occupation) {
        const occupationFields = occupations[occupation];
        const newSteps = occupationFields.map(occupationItem => {
          const recommended: { label: string; value: string }[] = [];

          if (occupation === 'designer' && Array.isArray(fields) && fields.length > 0) {
            fields.forEach(field => {
              const recommendedItems =
                recommendedDesignerTools[field.label as keyof typeof recommendedDesignerTools];
              if (Array.isArray(recommendedItems)) {
                recommended.push(...recommendedItems);
              }
            });
          }

          if (specialty && (!languages || languages?.length === 0)) {
            recommended.push(...recommendedLanguages[specialty]);
          }

          return {
            title: occupationItem.title,
            step: () => (
              <SelectFields
                recommendedList={recommended}
                fieldsList={occupationItem.fields}
                fieldsName={occupationItem.type}
              />
            ),
          };
        });

        if (step === SPECIALITY_STEP || step === FIELDS_STEP_ONE) {
          const updatedSteps = [
            ...DEFAULT_STEPS.slice(0, SPECIALITY_STEP + 1),
            ...newSteps,
            ...DEFAULT_STEPS.slice(SPECIALITY_STEP + 1),
          ];
          setSteps(updatedSteps);
        }
      }
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step - 1 >= 0) {
      setStep(prev => prev - 1);
    }
  };

  return { steps, step, handleNext, handleBack };
}
const OnboardingPage = () => {
  // TODO: move this logic into separate hook

  const methods = useForm<FormValues>({
    defaultValues: { occupation: 'designer', fields: [{ label: '3D', value: '3d' }] },
  });
  const { steps, step, handleNext, handleBack } = useSteps(methods.getValues);

  return (
    <Flex width={'100vw'} height={'100dvh'}>
      <ProgressSection step={step}>
        <Flex direction='column' flex={1}>
          <Flex align='center' flex={1}>
            <div>Content</div>
          </Flex>
        </Flex>
      </ProgressSection>
      <FormProvider {...methods}>
        <ActionSection steps={steps} step={step} handleNext={handleNext} handleBack={handleBack} />
      </FormProvider>
    </Flex>
  );
};

export default OnboardingPage;
