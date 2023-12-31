'use client';

import { QuestionIcon } from '@/shared/assets';
import { Tooltip } from 'react-tooltip';
import { RefObject, useState } from 'react';
import { useClickOutside, useGetScreenWidth } from '@/shared/lib';
import styles from './need-help.module.scss';
import { Typography } from '@/shared/ui';

const mailTo = 'mailto:help@teameights.com';

interface NeedHelpProps {
  /**
   * Determines the screen width at which the NeedHelp component should be hidden.
   */
  shouldHideWhenWidth?: number;
}

/**
 * The `NeedHelp` component represents a button that provides a tooltip with contact information when clicked.
 *
 */
export const NeedHelp = ({ shouldHideWhenWidth = 0 }: NeedHelpProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref: RefObject<HTMLDivElement> = useClickOutside(() => setIsOpen(false));
  const width = useGetScreenWidth();

  return (
    <>
      {width > shouldHideWhenWidth && (
        <div className={styles.needHelp} onClick={() => setIsOpen(true)} ref={ref}>
          <Typography size='body_m'>Need Help</Typography>
          <QuestionIcon data-tooltip-id='my-tooltip-inline' />
          <Tooltip
            id='my-tooltip-inline'
            className={styles.tooltip}
            isOpen={isOpen}
            clickable
            place='bottom-end'
          >
            <Typography size='body_s'>
              If you have any issues, please email <br /> us at{' '}
              <a className={styles.span} href={mailTo}>
                helpteameights@gmail.com
              </a>
            </Typography>
          </Tooltip>
        </div>
      )}
    </>
  );
};
