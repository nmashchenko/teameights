import { useState, useRef, useEffect } from 'react';
import { Typography, Button } from '../../shared/ui';
import styles from './cookie-banner.module.scss';
import Image from 'next/image';

export const CookieBanner = () => {
  const elemRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    return () => {
      if (elemRef.current) {
        elemRef.current.removeEventListener('animationend', () => {
          setOpen(false);
        });
      }
    };
  }, []);

  const handleAccept = () => {
    if (!buttonClicked) {
      console.log('Кнопка Accept нажата');
      elemRef.current?.classList.add(styles.closeIt);
      setButtonClicked(true);
    }
  };

  const handleDecline = () => {
    if (!buttonClicked) {
      console.log('Кнопка Decline нажата');
      elemRef.current?.classList.add(styles.closeIt);
      setButtonClicked(true);
    }
  };

  return (
    <>
      {open && (
        <div ref={elemRef} className={`${styles.container} ${styles.openIt}`}>
          <div className={styles.inline}>
            <div>
              <Image src='/images/cookie.png' width='50' height='50' alt='cookies' />
            </div>
            <div>
              <Typography color='white' size='body_s'>
                Our website use cookies. By continuing, we assume your permission to deploy cookies
                as detailed in our{' '}
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
      )}
    </>
  );
};
