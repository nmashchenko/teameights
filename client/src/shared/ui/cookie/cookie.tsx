import { Colors } from 'shared/constant';
import { Button } from '../button';
import { Typography, TypographySize, TypographyVariants } from '../typography';
import styles from './cookie.module.scss';
import Image from 'next/image';

export const Cookie = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inline}>
        <div>
          <Image src='/images/cookie.png' width='50' height='50' alt='cookies' />
        </div>
        <div>
          <Typography
            size={TypographySize.Body_M}
            variant={TypographyVariants.p}
            color={Colors.White}
          >
            Our website use cookies. By continuing, we assume your permission to deploy cookies as
            detailed in our{' '}
            <a href='#' className={styles.privacy}>
              Privacy Policy.
            </a>
          </Typography>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          size='m'
          typeBtn='primary'
          width='152px'
          onClick={() => console.log('Кнопка нажата')}
        >
          Accept
        </Button>
        <Button size='m' typeBtn='secondary' onClick={() => console.log('Кнопка n2 нажата')}>
          Decline
        </Button>
      </div>
    </div>
  );
};
