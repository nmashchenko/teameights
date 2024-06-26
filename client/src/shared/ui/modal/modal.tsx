'use client';

import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import styles from './modal.module.scss';
import { CrossIcon } from '@/shared/assets';

/**
 * Modal Component
 *
 * A customizable modal component powered by `ReactModal`. Offers different sizes and includes close functionality.
 *
 * Props:
 *
 * @prop {boolean} isOpen - Specifies if the modal should be open or closed.
 * @prop {function} [onClose] - Callback function executed when the modal is requested to be closed.
 * @prop {'s' | 'm' | 'l'} [size='s'] - Size of the modal. Can be 's' (small), 'm' (medium), or 'l' (large). Default is 's'.
 * @prop {ReactNode} [children] - Content to be displayed inside the modal.
 *
 * Usage:
 *
 * ```tsx
 * import { Modal } from 'shared/ui';
 *
 * <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="m">
 *   <p>Modal content here</p>
 * </Modal>
 * ```
 *
 * Note:
 * - This component uses `classNames` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - The `Cross` component is used to render the close icon in the modal.
 * - The modal uses a fade-in/out effect during open and close, which is set by the `closeTimeoutMS` property.
 * - The styles of the modal during various states (base, afterOpen, beforeClose) can be customized in the SCSS file.
 * - Clicking on the `Cross` icon or outside the modal content will trigger the `onClose` callback.
 *
 * Styling:
 * To further customize the modal's appearance or transition effects, modify the associated styles in 'styles.module.scss'.
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 's' | 'm' | 'l';
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = props => {
  const { isOpen, onClose, size = 's', children } = props;

  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{
        modal: clsx(styles.customModal, {}, [styles[`size_${size}`]]),
        overlay: styles.customOverlay,
      }}
      showCloseIcon={false}
    >
      <CrossIcon className={styles.closeButton} onClick={onClose} />
      <div className={styles.modalContent}>{children}</div>
    </ResponsiveModal>
  );
};
