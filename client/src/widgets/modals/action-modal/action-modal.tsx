import { useGetScreenWidth } from '@/shared/lib';
import { ActionModalDesktop } from './action-modal-desktop';
import { ActionModalPhone } from './action-modal-phone';
import { FC, PropsWithChildren } from 'react';
import { ActionModalProps } from './interfaces';

export const ActionModal: FC<PropsWithChildren<ActionModalProps>> = props => {
  const { heading, sub, isOpen, handleClose, children } = props;
  const width = useGetScreenWidth();

  return (
    <>
      {width > 520 ? (
        <ActionModalDesktop heading={heading} sub={sub} isOpen={isOpen} handleClose={handleClose}>
          {children}
        </ActionModalDesktop>
      ) : (
        <ActionModalPhone heading={heading} sub={sub} isOpen={isOpen} handleClose={handleClose}>
          {children}
        </ActionModalPhone>
      )}
    </>
  );
};
