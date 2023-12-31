import { Flex, Logo, ProgressBar, Typography } from '@/shared/ui';
import { ReactNode } from 'react';
import styles from './progress-section.module.scss';
import { useFormContext } from 'react-hook-form';
import { StepProps } from '@/app/onboarding/lib/const/steps';

interface ProgressSectionProps {
  step: number;
  children: ReactNode;
}

export const ProgressSection = ({ children, step }: ProgressSectionProps) => {
  const { watch } = useFormContext();
  const steps: StepProps[] = watch('steps');

  return (
    <Flex direction={'column'} className={styles.container}>
      <Logo shouldRedirect={false} />
      {children}
      <Flex gap={32} direction='column'>
        <Flex gap={16} direction='column'>
          <Typography size='heading_m'>{steps[step].meta.details}</Typography>
          <Typography size='body_m' color='greyNormal'>
            {steps[step].meta.description}
          </Typography>
        </Flex>
        <ProgressBar percentageProgress={(100 / steps.length) * step} />
      </Flex>
    </Flex>
  );
};
