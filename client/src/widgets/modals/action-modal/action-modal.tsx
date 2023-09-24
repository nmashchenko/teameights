import { Button, Modal, Typography } from 'shared/ui';
import styles from './action-modal.module.scss';
import { FC } from 'react';

interface ActionModalProps {
  heading: string;
  sub: string;
  buttonOneText: string;
  buttonOneAction: () => void;
  buttonTwoText: string;
  buttonTwoAction: () => void;
  isOpenModal: boolean;
}

export const ActionModal: FC<ActionModalProps> = ({
  heading,
  sub,
  buttonOneText,
  buttonOneAction,
  buttonTwoText,
  buttonTwoAction,
  isOpenModal,
}) => {
  return (
    <div>
      {isOpenModal && (
        <Modal isOpen={true} size='s'>
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
              <Button typeBtn='primary' color='white' size='m' onClick={buttonOneAction}>
                {buttonOneText}
              </Button>
              {buttonTwoText && buttonTwoAction && (
                <Button typeBtn='secondary' color='white' size='m' onClick={buttonTwoAction}>
                  {buttonTwoText}
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
