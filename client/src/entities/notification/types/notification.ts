import { User } from 'entities/user';
import { Team } from 'entities/team';

export type NotificationType = 'SystemNotification' | 'TeamInvitationNotification';

export interface BaseNotification {
  _id: string;
  user: User;
  read: boolean;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SystemNotification extends BaseNotification {
  type: 'SystemNotification';
  system_message: string;
}

export type InviteStatus = 'pending' | 'accepted' | 'rejected';

export interface TeamInvitationNotification extends BaseNotification {
  type: 'TeamInvitationNotification';
  teamid: Team;
  from_user_id: User;
  to_user_email: string;
  status: InviteStatus;
  image: string;
  message: string;
}

export type Notification = SystemNotification | TeamInvitationNotification;
