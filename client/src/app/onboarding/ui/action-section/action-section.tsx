import { Button, Flex, Typography, NeedHelp } from '@/shared/ui';
import { ReactNode } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import styles from './action-section.module.scss';

interface ActionSectionProps {
  children: ReactNode;
  stepTitle: string;
}

export const ActionSection = ({ children, stepTitle }: ActionSectionProps) => {
  return (
    <Flex direction={'column'} className={styles.container}>
      <Flex justify={'space-between'} align={'center'}>
        <Typography size={'heading_l'} color={'greenBright'}>
          {stepTitle}
        </Typography>
        <NeedHelp />
      </Flex>
      <Flex flex={1} align='center' justify='center'>
        {children}
      </Flex>
      <Flex justify={'space-between'}>
        <Button className={styles.button} typeBtn='secondary'>
          <ArrowLeftIcon />
          Back
        </Button>
        <Button className={styles.button}>
          Next
          <ArrowRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
