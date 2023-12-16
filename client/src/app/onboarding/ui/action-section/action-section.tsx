import { Button, Flex, Typography, NeedHelp } from '@/shared/ui';
import { Dispatch, SetStateAction } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import styles from './action-section.module.scss';
import { steps } from '../../steps';

interface ActionSectionProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const ActionSection = ({ step, setStep }: ActionSectionProps) => {
  // TODO: move this logic to a steps hook
  const handleNext = () => {
    if (step + 1 <= steps.length - 1) {
      setStep(prev => prev + 1);
    }
  };

  // TODO: move this logic to a steps hook
  const handleBack = () => {
    if (step - 1 >= 0) {
      setStep(prev => prev - 1);
    }
  };

  return (
    <Flex direction={'column'} className={styles.container}>
      <Flex justify={'space-between'} align={'center'}>
        <Typography size={'heading_l'} color={'greenBright'}>
          {steps[step].title}
        </Typography>
        <NeedHelp />
      </Flex>
      <Flex flex={1} align='center' justify='center'>
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
        {step + 1 > steps.length - 1 ? (
          <Button padding='0 16px' width='170px'>
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
