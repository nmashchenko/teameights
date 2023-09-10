'use client';

import classNames from 'clsx';
import { FC, PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

import styles from './styles.module.scss';

import { Cross } from 'shared/assets/Icons/Cross';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  size?: 's' | 'm' | 'l';
}

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { isOpen, onClose, size = 's', children } = props;

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
        base: classNames(styles.modalBody, {}, [styles[`size_${size}`]]),
        afterOpen: classNames(styles.modalBody__afterOpen, {}, [styles[`size_${size}`]]),
        beforeClose: classNames(styles.modalBody__beforeClose, {}, [styles[`size_${size}`]])
      }}
    >
      <Cross className={styles.closeButton} onClick={onClose} />
      <div className={styles.modalContent}>{children}</div>
    </ReactModal>
  );
};
