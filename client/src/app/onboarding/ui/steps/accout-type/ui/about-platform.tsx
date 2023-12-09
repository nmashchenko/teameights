import { FC, ReactNode } from 'react';
import styles from './about-platform.module.scss';
import { Flex } from '@/shared/ui';

interface AboutPlatformProps {
  children: ReactNode;
  PlatformText: string;
}

export const AboutPlatform: FC<AboutPlatformProps> = ({ children, PlatformText }) => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      gap='24px'
      padding='32px'
      width='220px'
      className={styles.container}
    >
      {children}
      {PlatformText}
    </Flex>
  );
};
