'use client';

import type { RefObject } from 'react';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import Link from 'next/link';
import { ArrowLeft, LogoBig, Planet, Question } from 'shared/assets';
import { AmongUs, useClickOutside } from 'shared/lib';
import { Button, Typography, TypographySize } from 'shared/ui';

import styles from './styles/not-found.module.scss';

/** Used to open email */
const mailTo = 'mailto:help@teameights.com';

export default function NotFound() {
  const [isOpen, setIsOpen] = useState(false);
  const reference: RefObject<HTMLDivElement> = useClickOutside(() => setIsOpen(false));

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href='/'>
            <LogoBig />
          </Link>
          <div className={styles.needHelp} onClick={() => setIsOpen(true)} ref={reference}>
            <Typography size={TypographySize.Body_L}>Need Help</Typography>
            <Question data-tooltip-id='my-tooltip-inline' />
            <Tooltip
              id='my-tooltip-inline'
              className={styles.tooltip}
              isOpen={isOpen}
              clickable
              place='bottom-end'
            >
              <Typography size={TypographySize.Body_M}>
                If you have any issues, please email <br /> us at{' '}
                <Link href={mailTo}>
                  <span className={styles.span}>helpteameights@gmail.com</span>
                </Link>
              </Typography>
            </Tooltip>
          </div>
        </header>
        <div className={styles.main}>
          <div className={styles.illustration}>
            <Planet />
          </div>
          <div className={styles.info}>
            <Typography size={TypographySize.Heading_L}>
              Oops... it looks like you are lost.
            </Typography>
            <Typography size={TypographySize.Body_L}>
              Please check the URL or contact us for assistance
            </Typography>
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
