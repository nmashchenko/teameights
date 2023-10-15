import { Modal, Typography } from '@/shared/ui';
import styles from './action-modal-desktop.module.scss';
import { FC, PropsWithChildren } from 'react';

interface ActionModalProps {
  heading: string;
  sub: string;
  isOpenModal: boolean;
  handleClose: () => void;
}

export const ActionModal: FC<PropsWithChildren<ActionModalProps>> = ({
  heading,
  sub,
  isOpenModal,
  handleClose,
  children,
}) => {
  return (
    <div>
      <Modal isOpen={isOpenModal} onClose={handleClose} size='s'>
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
