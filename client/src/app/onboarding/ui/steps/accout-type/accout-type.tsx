import { Flex, Typography } from '@/shared/ui';
import { AboutPlatform } from './about-platform';
import { CookieIcon } from '@/features/cookie-banner/cookie';

export const AccountType = () => {
  return (
    <div>
      {/* Remove inline styles and convert to flex */}
      <div style={{ textAlign: 'center' }}>
        <Typography size='heading_m' color='white'>
          I’d like to join the platform as...
        </Typography>
      </div>
      {/* Change icons to normal ones, not cookies */}
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
