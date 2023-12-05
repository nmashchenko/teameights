'use client';
import Link from 'next/link';
import { ArrowLeft, Planet } from '@/shared/assets';
import { AmongUs } from '@/shared/lib';
import { Button, Logo, Typography } from '@/shared/ui';
import styles from './styles/not-found.module.scss';
import { NeedHelp } from '../shared/ui/need-help';

/** Used to open email */
const mailTo = 'mailto:help@teameights.com';

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo />
          <NeedHelp shouldHideWhenWidth={430} />
        </header>
        <div className={styles.main}>
          <div className={styles.illustration}>
            <Planet />
          </div>
          <div className={styles.info}>
            <Typography size='heading_m'>Oops... it looks like you are lost.</Typography>
            <Typography size='body_m'>Please check the URL or contact us for assistance</Typography>
            <div className={styles.button}>
              <Button>
                <ArrowLeft />
                <Link href='/'>Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.mobileButtons}>
          <Link href='/'>
            <Button width='100%'>
              <ArrowLeft />
              Back to home
            </Button>
          </Link>

          <Link href={mailTo}>
            <Button width='100%' typeBtn='secondary'>
              Need Help
            </Button>
          </Link>
        </div>
      </div>
      <AmongUs />
    </>
  );
}
