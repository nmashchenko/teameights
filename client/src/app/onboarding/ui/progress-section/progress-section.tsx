import { Flex, Logo, ProgressBar } from '@/shared/ui';
import { ReactNode } from 'react';
import styles from './progress-section.module.scss';
import { useFormContext } from 'react-hook-form';

interface ProgressSectionProps {
  step: number;
  children: ReactNode;
}

export const ProgressSection = ({ children, step }: ProgressSectionProps) => {
  const { getValues } = useFormContext();
  const steps = getValues('steps');

  return (
    <Flex direction={'column'} className={styles.container}>
      <Logo shouldRedirect={false} />
      {children}
      <ProgressBar percentageProgress={(100 / steps.length) * step} />
    </Flex>
  );
};
