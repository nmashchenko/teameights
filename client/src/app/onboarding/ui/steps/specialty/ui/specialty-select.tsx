import { FC, ReactNode } from 'react';
import styles from './specialty-select.module.scss';
import { Flex } from '@/shared/ui';

interface SpecialtySelectProps {
  children: ReactNode;
  PlatformText: string;
}

export const SpecialtySelect: FC<SpecialtySelectProps> = ({ children, PlatformText }) => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      gap='8px'
      height='78px'
      className={styles.container}
    >
      {children}
      {PlatformText}
    </Flex>
  );
};
