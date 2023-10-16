import { Modal, Typography } from '@/shared/ui';
import styles from './action-modal-desktop.module.scss';
import { FC, PropsWithChildren } from 'react';
import { ActionModalProps } from '../interfaces';
export const ActionModalDesktop: FC<PropsWithChildren<ActionModalProps>> = props => {
  const { heading, sub, isOpen, handleClose, children } = props;
  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleClose} size='s'>
        <div className={styles.container}>
          <div className={styles.text}>
            <Typography color='white' size='heading_m'>
              {heading}
            </Typography>
            <Typography color='white' size='body_m'>
              {sub}
            </Typography>
          </div>
          <div className={styles.button}>{children}</div>
        </div>
      </Modal>
    </div>
  );
};
