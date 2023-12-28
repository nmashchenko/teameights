import { Flex, Logo, ProgressBar, Typography } from '@/shared/ui';
import { ReactNode } from 'react';
import styles from './progress-section.module.scss';
import { useFormContext } from 'react-hook-form';

interface ProgressSectionProps {
  step: number;
  children: ReactNode;
}

export const ProgressSection = ({ children, step }: ProgressSectionProps) => {
  const { watch } = useFormContext();
  const steps = watch('steps');

  return (
    <Flex direction={'column'} className={styles.container}>
      <Logo shouldRedirect={false} />
      {children}
      <Flex gap={32} direction='column'>
        <Flex gap={16} direction='column'>
          {/*TODO: ADD DESCRIPTION / METADATA TO EACH STEP TO DISPLAY HERE*/}
          <Typography size='heading_m'>Search for teammates</Typography>
          <Typography size='body_m' color='greyNormal'>
            Our intuitive search filters make it easy to find the right teammate based on a set of
            criteria.
          </Typography>
        </Flex>
        <ProgressBar percentageProgress={(100 / steps.length) * step} />
      </Flex>
    </Flex>
  );
};
