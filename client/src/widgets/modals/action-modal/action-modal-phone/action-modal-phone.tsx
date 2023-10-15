import { Drawer, Typography } from '@/shared/ui';
import { FC, PropsWithChildren } from 'react';
import styles from './action-modal-phone.module.scss';

interface ActionModalPhoneProps {
  heading: string;
  sub: string;
  isOpenModal: boolean;
  handleClose: () => void;
}

export const ActionModalPhone: FC<PropsWithChildren<ActionModalPhoneProps>> = ({
  isOpenModal,
  handleClose,
  heading,
  sub,
  children,
}) => {
  return (
    <>
      <Drawer open={isOpenModal} onClose={handleClose}>
        <div className={styles.container}>
          <div className={styles.text}>
            <Typography size='heading_s' color='white'>
              {heading}
            </Typography>
            <Typography size='body_m' color='white'>
              {sub}
            </Typography>
          </div>
          <div className={styles.button}>{children}</div>
        </div>
      </Drawer>
    </>
  );
};
