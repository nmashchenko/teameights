import { FC, PropsWithChildren } from 'react';

import ReactModal from 'react-modal';
import { Cross } from 'shared/assets/Icons/Cross';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="modal-body"
    >
      <Cross className="close-button" />
      {props.children}
    </ReactModal>
  );
};

export default Modal;
