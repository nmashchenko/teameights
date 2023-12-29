import { User } from '../../users/entities/user.entity';

export enum NotificationTypesEnum {
  system = 'system',
  // team_invitation = 'team_invitation',
  friend_request = 'friend_request',
}

export enum NotificationStatusEnum {
  rejected = 'rejected',
  pending = 'pending',
  accepted = 'accepted',
}

export class SystemNotificationData {
  system_message: string;
}

export class FriendRequestNotificationData {
  status: NotificationStatusEnum;

  creator: User;
}

export type NotificationTypeData = SystemNotificationData | FriendRequestNotificationData;

// export class TeamInvitationNotificationData {
//   @IsObject()
//   @ValidateNested()
//   @Type(() => User)
//   fromUser: User;
//
//   @IsString()
//   @IsNotEmpty()
//   teamTo: string;
//
//   @IsString()
//   @IsOptional()
//   message?: string | null;
//
//   @Column({ type: 'enum', enum: NotificationStatusEnum, default: NotificationStatusEnum.pending })
//   status: NotificationStatusEnum;
// }
