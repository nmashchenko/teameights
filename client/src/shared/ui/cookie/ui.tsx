import { Colors } from 'shared/constant';
import { Button } from '../button';
import { Typography, TypographySize, TypographyVariants } from '../typography';
import styles from './styles.module.scss';
import Image from 'next/image';

const Cookie = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inline}>
        <div>
          <Image src='/images/Frame39750.png' width='50' height='50' alt='cookies' />
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
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          size='m'
          typeBtn='primary'
          width='152px'
          onClick={() => console.log('Кнопка нажата')}
        >
          Accept
        </Button>
        <Button
          size='m'
          typeBtn='secondary'
          width='88px'
          onClick={() => console.log('Кнопка n2 нажата')}
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default Cookie;
