import { useRef } from 'react';
import { Typography, Button } from '../../shared/ui';
import styles from './cookie-banner.module.scss';
import Image from 'next/image';
import { useAnimationEnd } from './lib/hooks/useAnimationEnd';

export const CookieBanner = () => {
  const elemRef = useRef<HTMLDivElement | null>(null);

  const { handleLogic } = useAnimationEnd({
    elemRef,
    buttonStyles: styles.closeIt,
  });

  const handleAccept = () => {
    handleLogic();
  };

  const handleDecline = () => {
    handleLogic();
  };

  return (
    <>
      <div ref={elemRef} className={`${styles.container} ${styles.openIt}`}>
        <div className={styles.inline}>
          <div>
            <Image src='/images/cookie.png' width='50' height='50' alt='cookies' />
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
          <Button size='m' typeBtn='primary' width='152px' onClick={handleAccept}>
            Accept
          </Button>
          <Button size='m' typeBtn='secondary' onClick={handleDecline}>
            Decline
          </Button>
        </div>
      </div>
    </>
  );
};
