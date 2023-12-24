'use client';

import { Flex } from '@/shared/ui';
import { ProgressSection } from '@/app/onboarding/ui/progress-section/progress-section';
import { ActionSection } from '@/app/onboarding/ui/action-section/action-section';
import { useForm, FormProvider, UseFormGetValues } from 'react-hook-form';
import { useState } from 'react';
import { steps as DEFAULT_STEPS } from './steps';
import { occupations } from '@/app/onboarding/occupations';
import { SelectFields } from '@/app/onboarding/step/select-fields';
import { recommendedLanguages } from '@/shared/constant';
import { recommendedDesignerTools } from '@/shared/constant/recommended-designer-tools';

const SPECIALITY_STEP = 2;
const FIELDS_STEP_ONE = 3;

interface Option {
  label: string;
  value: string;
}

type Occupation = 'Manager' | 'Designer' | 'Developer';
type Specialty = 'Manager' | 'Designer' | keyof typeof recommendedLanguages;

interface FormValues {
  specialty?: Specialty;
  frameworks?: Option[];
  languages?: Option[];
  fields?: Option[];
}

function useSteps(getValues: UseFormGetValues<Partial<FormValues>>) {
  const [steps, setSteps] = useState(DEFAULT_STEPS);
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step + 1 <= steps.length - 1) {
      const { languages, specialty, fields } = getValues();
      if (specialty) {
        // Converting specialties to one of three occupations
        const occupation = ['developer', 'scientist', 'engineer'].filter(specialty =>
          specialty.toLowerCase().includes(specialty)
        )
          ? 'Developer'
          : specialty;
        const occupationFields = occupations[occupation as Occupation];
        const newSteps = occupationFields.map(occupationItem => {
          const recommended: { label: string; value: string }[] = [];

          if (occupation === 'Designer' && Array.isArray(fields) && fields.length > 0) {
            fields.forEach(field => {
              const recommendedItems =
                recommendedDesignerTools[field.label as keyof typeof recommendedDesignerTools];
              if (Array.isArray(recommendedItems)) {
                recommended.push(...recommendedItems);
              }
            });
          }

          if (
            step === SPECIALITY_STEP &&
            occupation === 'Developer' &&
            (!languages || languages?.length === 0)
          ) {
            recommended.push(...recommendedLanguages[specialty]);
          }

          return {
            title: occupationItem.title,
            step: () => (
              <SelectFields
                formName={occupationItem.formName}
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
  const methods = useForm<FormValues>({
    defaultValues: { fields: [], languages: [], frameworks: [] },
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
