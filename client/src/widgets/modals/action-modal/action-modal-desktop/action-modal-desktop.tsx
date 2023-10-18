import { Flex, Modal, Typography } from '@/shared/ui';
import styles from './action-modal-desktop.module.scss';
import { FC, PropsWithChildren } from 'react';
import { ActionModalProps } from '../interfaces';
export const ActionModalDesktop: FC<PropsWithChildren<ActionModalProps>> = props => {
  const { heading, sub, isOpen, handleClose, children } = props;
  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleClose} size='s'>
        <Flex height='286px' justify='center' align='center' direction='column'>
          <Flex className={styles.text}>
            <Typography color='white' size='heading_m'>
              {heading}
            </Typography>
            <Typography color='white' size='body_m'>
              {sub}
            </Typography>
          </Flex>
          <Flex direction='column' width='100%' gap='8px'>
            {children}
          </Flex>
        </Flex>
      </Modal>
    </div>
  );
};
