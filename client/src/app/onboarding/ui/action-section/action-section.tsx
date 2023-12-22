import { Button, Flex, Typography, NeedHelp } from '@/shared/ui';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import styles from './action-section.module.scss';
import { Steps } from '../../steps';

interface ActionSectionProps {
  step: number;
  steps: Steps[];
  handleNext: () => void;
  handleBack: () => void;
}

export const ActionSection = ({ step, steps, handleNext, handleBack }: ActionSectionProps) => {
  const Step = steps[step].step;

  return (
    <Flex direction={'column'} className={styles.container}>
      <Flex justify={'space-between'} align={'center'}>
        <Typography size={'heading_l'} color={'greenBright'}>
          {steps[step].title}
        </Typography>
        <NeedHelp />
      </Flex>
      <Flex flex={1} align='center' justify='center'>
        {<Step />}
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
