'use client';

import { useRef } from 'react';
import { Button, Typography } from '@/shared/ui';
import styles from './cookie-banner.module.scss';
import { useAnimationEnd } from './lib/hooks/useAnimationEnd';
import { CookieIcon } from './cookie';

export const CookieBanner = () => {
  const elemRef = useRef<HTMLDivElement | null>(null);

  const { handleLogic } = useAnimationEnd({
    elemRef,
  });

  //TODO: network request to check if user agreed before
  // TODO: add logic to support reject/accept cookies when server will have accepted-cookies field
  return (
    <>
      <div ref={elemRef} className={styles.container}>
        <div className={styles.inline}>
          <div>
            <CookieIcon />
          </div>
          <div>
            <Typography color='white' size='body_s'>
              Our website use cookies. By continuing, we assume your permission to deploy cookies as
              detailed in our{' '}
              <a href='#' className={styles.privacy}>
                Privacy Policy.
              </a>
            </Typography>
          </div>
        </div>
        <div className={styles.button}>
          <Button size='m' typeBtn='primary' width='152px' onClick={handleLogic}>
            Accept
          </Button>
          <Button size='m' typeBtn='secondary' onClick={handleLogic}>
            Decline
          </Button>
        </div>
      </div>
    </>
  );
};
