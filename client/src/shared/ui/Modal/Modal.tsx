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
      closeTimeoutMS={225}
      onRequestClose={onClose}
      overlayClassName={{
        base: styles.modalOverlay,
        afterOpen: styles.modalOverlay__afterOpen,
        beforeClose: styles.modalOverlay__beforeClose
      }}
      className={{
        base: styles.modalBody,
        afterOpen: styles.modalBody__afterOpen,
        beforeClose: styles.modalBody__beforeClose
      }}
    >
      <Cross className={styles.closeButton} onClick={onClose} />
      <div className={styles.modalContent}>{children}</div>
    </ReactModal>
  );
};
