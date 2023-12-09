import { Flex, Typography } from '@/shared/ui';
import { AboutPlatform } from './ui/about-platform';
import styles from './account-type.module.scss';
import Image from 'next/image';

export const AccountType = () => {
  return (
    <div>
      <Flex direction='column' className={styles.align_text}>
        <Typography size='heading_m' color='white'>
          I’d like to join the platform as...
        </Typography>
      </Flex>
      <Flex gap='24px' margin='32px 0 0 0'>
        <AboutPlatform PlatformText='IT-specialist'>
          <Image src='/images/technologist.png' alt='technologist' width={48} height={48} />
        </AboutPlatform>
        <AboutPlatform PlatformText='Company'>
          <Image src='/images/office-worker.png' alt='office-worker' width={48} height={48} />
        </AboutPlatform>
      </Flex>
    </div>
  );
};
