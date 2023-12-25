import { Button, Flex, Typography, NeedHelp } from '@/shared/ui';
import { Dispatch, SetStateAction } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import { useFormContext } from 'react-hook-form';
import styles from './action-section.module.scss';
import { useRouter } from 'next/navigation';
import { PersonalInfo } from '@/app/onboarding/ui/steps/personal-info/personal-info';
import { Specialty } from '@/app/onboarding/ui/steps/specialty/specialty';
import { AccountType } from '@/app/onboarding/ui/steps/accout-type/accout-type';
import { IconsSelector } from '@/app/onboarding/ui/steps/icons-selector/icons-selector';
import {
  designerTools,
  managerTools,
  programmingLanguages,
  recommendedLanguages,
} from '@/shared/constant';
import { SocialLinks } from '@/app/onboarding/ui/steps/social-links/social-links';

interface ActionSectionProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const ActionSection = ({ step, setStep }: ActionSectionProps) => {
  const { getValues, setValue } = useFormContext();
  const router = useRouter();

  const steps = getValues('steps');
  // TODO: move this logic to a steps hook

  const handleNext = () => {
    const values = getValues();

    console.log('TODO: fix this');
    console.log(values, step, steps[step]);

    switch (step) {
      case 0:
        if (values.accountType === 'Company') {
          router.push('/onboarding/company');
          break;
        }

        setValue('steps', [
          { step: <AccountType />, title: 'Account type' },
          { step: <PersonalInfo />, title: 'Personal info' },
          { step: <Specialty />, title: 'Speciality' },
        ]);
        break;
      case 2:
        let speciality = values?.speciality;

        switch (speciality) {
          case 'Designer':
            setValue('steps', [
              { step: <AccountType />, title: 'Account type' },
              { step: <PersonalInfo />, title: 'Personal info' },
              { step: <Specialty />, title: 'Speciality' },
              {
                step: <IconsSelector icons={designerTools} formFieldToUpdate='designerTools' />,
                title: 'Tools',
              },
              { step: <SocialLinks />, title: 'Links' },
            ]);
            break;
          case 'Project Manager':
            setValue('steps', [
              { step: <AccountType />, title: 'Account type' },
              { step: <PersonalInfo />, title: 'Personal info' },
              { step: <Specialty />, title: 'Speciality' },
              {
                step: <IconsSelector icons={managerTools} formFieldToUpdate='managerTools' />,
                title: 'Tools',
              },
              { step: <SocialLinks />, title: 'Links' },
            ]);
            break;
          default:
            setValue('steps', [
              { step: <AccountType />, title: 'Account type' },
              { step: <PersonalInfo />, title: 'Personal info' },
              { step: <Specialty />, title: 'Speciality' },
              {
                step: (
                  <IconsSelector
                    icons={programmingLanguages}
                    recommendedIcons={recommendedLanguages}
                    formFieldToUpdate='programmingLanguages'
                  />
                ),
                title: 'Languages',
              },
              { step: <SocialLinks />, title: 'Links' },
            ]);
        }
        break;
      default:
        break;
    }

    if (step <= steps.length - 1) {
      setStep(prev => prev + 1);
    }
  };

  // TODO: move this logic to a steps hook
  const handleBack = () => {
    if (step - 1 >= 0) {
      setStep(prev => prev - 1);
    }
  };

  console.log(steps, steps[step], step);

  return (
    <Flex direction={'column'} className={styles.container} height='100%'>
      <Flex justify={'space-between'} align={'center'}>
        <Typography size={'heading_l'} color={'greenBright'}>
          {steps[step].title}
        </Typography>
        <NeedHelp />
      </Flex>
      <Flex
        height='100%'
        maxHeight=''
        justify='center'
        align={step === 3 || step === 4 ? 'start' : 'center'}
      >
        {steps[step].step}
      </Flex>
      <Flex justify={'space-between'}>
        <Button
          padding='0 16px'
          width='170px'
          typeBtn='secondary'
          onClick={handleBack}
          disabled={step - 1 < 0}
        >
          <ArrowLeftIcon />
          Back
        </Button>
        {step === 4 ? (
          <Button padding='0 16px' width='170px' type='submit'>
            Submit
          </Button>
        ) : (
          <Button padding='0 16px' width='170px' onClick={handleNext}>
            Next
            <ArrowRightIcon />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
