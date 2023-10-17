import { FC } from 'react';
import { InfoModalUserProps } from './interfaces';
import { useGetScreenWidth } from '@/shared/lib';
import { UserPreviewModal } from './desktop-modal-user/user-modal';
import { UserPreviewPhone } from './phone-modal-user/user-profile-phone';

export const InfoModalUser: FC<InfoModalUserProps> = props => {
  const { user, isOpenModal, handleClose } = props;
  const width = useGetScreenWidth();

  return (
    <>
      {width > 600 ? (
        <UserPreviewModal user={user} isOpenModal={isOpenModal} handleClose={handleClose} />
      ) : (
        <UserPreviewPhone user={user} isOpenModal={isOpenModal} handleClose={handleClose} />
      )}
    </>
  );
};
