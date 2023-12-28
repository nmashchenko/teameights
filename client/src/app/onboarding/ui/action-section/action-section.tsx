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
  fields,
  frameworks,
  managerTools,
  methodologies,
  programmingLanguages,
  recommendedLanguages,
} from '@/shared/constant';
import { SocialLinks } from '@/app/onboarding/ui/steps/social-links/social-links';
import { IOption } from '@/shared/interfaces';
import { StepProps } from '@/app/onboarding/page';

interface ActionSectionProps {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
}

export const ActionSection = ({ step, handleNext, handleBack }: ActionSectionProps) => {
  const { watch } = useFormContext();

  const steps = watch('steps');

  return (
    <Flex direction={'column'} className={styles.container} height='100%'>
      <Flex justify={'space-between'} align={'center'}>
        <Typography className={styles.title} size={'heading_l'} color={'greenBright'}>
          {steps[step]?.title}
        </Typography>
        <NeedHelp />
      </Flex>
      <Flex
        height='100%'
        maxHeight=''
        justify='center'
        align={steps[step]?.centered ? 'center' : 'start'}
      >
        {steps[step]?.step}
      </Flex>
      <Flex className={styles.buttons_container} justify={'space-between'}>
        <Button
          className={styles.button}
          padding='0 16px'
          width='170px'
          typeBtn='secondary'
          onClick={handleBack}
          disabled={step - 1 < 0}
        >
          <ArrowLeftIcon />
          Back
        </Button>
        {steps[step]?.submissionStep ? (
          <Button padding='0 16px' width='170px' type='submit'>
            Submit
          </Button>
        ) : (
          <Button className={styles.button} padding='0 16px' width='170px' onClick={handleNext}>
            Next
            <ArrowRightIcon />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
