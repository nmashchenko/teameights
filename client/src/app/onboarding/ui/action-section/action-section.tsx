import { Button, Flex, Typography, NeedHelp } from '@/shared/ui';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import { useFormContext } from 'react-hook-form';
import styles from './action-section.module.scss';
import { StepProps } from '@/app/onboarding/lib/const/steps';

interface ActionSectionProps {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
}

export const ActionSection = ({ step, handleNext, handleBack }: ActionSectionProps) => {
  const {
    watch,
    formState: { isSubmitting },
  } = useFormContext();

  const steps: StepProps[] = watch('steps');

  const isSubmissionStep = steps[step].submissionStep;

  return (
    <Flex direction={'column'} className={styles.container} height='100%'>
      <Flex justify={'space-between'} align={'center'}>
        <Typography className={styles.title} size={'heading_l'} color={'greenBright'}>
          {steps[step].title}
        </Typography>
        <NeedHelp />
      </Flex>
      <Flex
        height='100%'
        maxHeight=''
        justify='center'
        align={steps[step].centered ? 'center' : 'start'}
      >
        {steps[step].step}
      </Flex>
      <Flex className={styles.buttons_container} justify={'space-between'}>
        <Button
          className={styles.button}
          padding='0 16px'
          typeBtn='secondary'
          onClick={handleBack}
          disabled={step - 1 < 0}
        >
          <ArrowLeftIcon />
          Back
        </Button>
        {/*NOTE: Don't change this, otherwise it would submit the form before last step (need to find better approach in the future)*/}
        {isSubmissionStep && (
          <Button className={styles.button} padding='0 16px' type='submit' loading={isSubmitting}>
            Submit
          </Button>
        )}
        {!isSubmissionStep && (
          <Button className={styles.button} padding='0 16px' onClick={handleNext} type='button'>
            Next
            <ArrowRightIcon />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
