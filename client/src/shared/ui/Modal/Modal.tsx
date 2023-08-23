import { FC, PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

import { Cross } from 'shared/assets/Icons/Cross';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { isOpen, onClose, children } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.modalOverlay}
      className={styles.modalBody}
    >
      <Cross className={styles.closeButton} onClick={onClose} />
      {children}
    </ReactModal>
  );
};
