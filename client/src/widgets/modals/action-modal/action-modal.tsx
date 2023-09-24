import { Button, Modal, Typography } from '@/shared/ui';
import styles from './action-modal.module.scss';
import { FC } from 'react';

interface ActionModalProps {
  heading: string;
  sub: string;
  buttonOneText: string;
  buttonOneAction: () => void;
  buttonTwoText?: string;
  buttonTwoAction?: () => void;
  isOpenModal: boolean;
  handleClose: () => void;
  buttonOneType: 'tertiary' | 'danger' | 'secondary' | 'primary',
  buttonTwoType?: 'tertiary' | 'danger' | 'secondary' | 'primary'
}

export const ActionModal: FC<ActionModalProps> = ({
  heading,
  sub,
  buttonOneText,
  buttonOneAction,
  buttonTwoText,
  buttonTwoAction,
  isOpenModal,
  handleClose,
  buttonOneType = 'primary',
  buttonTwoType = 'tertiary'
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
            <div className={styles.button}>
              <Button typeBtn={buttonOneType} color='white' size='m' onClick={buttonOneAction}>
                {buttonOneText}
              </Button>
              {buttonTwoText && (
                <Button typeBtn={buttonTwoType} color='white' size='m' onClick={buttonTwoAction}>
                  {buttonTwoText}
                </Button>
              )}
            </div>
          </div>
        </Modal>
    </div>
  );
};
