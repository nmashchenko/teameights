import { FC } from 'react';
import { InfoModalUserProps } from './interfaces';
import { useGetScreenWidth } from '@/shared/lib';
import { UserPhone } from './phone/phone';
import { UserDesktop } from './desktop/desktop';

export const User: FC<InfoModalUserProps> = props => {
  const { user, isOpenModal, handleClose } = props;
  const width = useGetScreenWidth();

  return (
    <>
      {width > 600 ? (
        <UserDesktop user={user} isOpenModal={isOpenModal} handleClose={handleClose} />
      ) : (
        <UserPhone user={user} isOpenModal={isOpenModal} handleClose={handleClose} />
      )}
    </>
  );
};
