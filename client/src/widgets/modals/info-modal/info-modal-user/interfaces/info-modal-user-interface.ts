import { IUserResponse } from 'teameights-types';

export interface InfoModalUserProps {
  user: IUserResponse;
  isOpenModal: boolean;
  handleClose: () => void;
}
