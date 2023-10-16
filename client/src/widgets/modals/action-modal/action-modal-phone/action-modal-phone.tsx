'use client';

import { Drawer, Typography } from '@/shared/ui';
import { FC, PropsWithChildren } from 'react';
import styles from './action-modal-phone.module.scss';
import { Cross } from '@/shared/assets';
import { ActionModalProps } from '../interfaces';

export const ActionModalPhone: FC<PropsWithChildren<ActionModalProps>> = props => {
  const { heading, sub, isOpen, handleClose, children } = props;
  return (
    <>
      <Drawer open={isOpen} onClose={handleClose}>
        <div className={styles.container}>
          <Cross className={styles.close_button} onClick={handleClose} />
          <div className={styles.text}>
            <Typography size='heading_s' color='white'>
              {heading}
            </Typography>
            <Typography size='body_m' color='white'>
              {sub}
            </Typography>
          </div>
          <div className={styles.button}>{children}</div>
        </div>
      </Drawer>
    </>
  );
};
