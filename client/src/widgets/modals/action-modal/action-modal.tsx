import { useGetScreenWidth } from '@/shared/lib';
import { Desktop } from './desktop';
import { Phone } from './phone';
import { FC, PropsWithChildren } from 'react';
import { ActionModalProps } from './interfaces';

export const ActionModal: FC<PropsWithChildren<ActionModalProps>> = props => {
  const { heading, sub, isOpen, handleClose, children } = props;
  const width = useGetScreenWidth();

  return (
    <>
      {width > 520 ? (
        <Desktop heading={heading} sub={sub} isOpen={isOpen} handleClose={handleClose}>
          {children}
        </Desktop>
      ) : (
        <Phone heading={heading} sub={sub} isOpen={isOpen} handleClose={handleClose}>
          {children}
        </Phone>
      )}
    </>
  );
};
