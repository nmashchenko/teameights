import { Flex, Typography } from '@/shared/ui';
import { AboutPlatform } from './about-platform';
import { CookieIcon } from '@/features/cookie-banner/cookie';

export const AccountType = () => {
  return (
    <div>
      <div>
        <Typography size='heading_m' color='white'>
          I’d like to join the platform as...
        </Typography>
      </div>
      <Flex gap='24px' margin='32px 0 0 0'>
        <AboutPlatform PlatformText='IT-specialist'>
          <CookieIcon width='48px' height='48px' />
        </AboutPlatform>
        <AboutPlatform PlatformText='Technologist'>
          <CookieIcon width='48px' height='48px' />
        </AboutPlatform>
      </Flex>
    </div>
  );
};
