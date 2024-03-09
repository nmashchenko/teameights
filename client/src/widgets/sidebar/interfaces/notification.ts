import { IUserResponse, Identifiable, Timestamps } from '@teameights/types';

interface INotificationBase extends Identifiable, Timestamps {
  receiver: IUserResponse;
  type: 'system' | 'friend_request';
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFriendNotification extends INotificationBase {
  type: 'friend_request';
  data: {
    status: string;
    creator: IUserResponse;
  };
}
