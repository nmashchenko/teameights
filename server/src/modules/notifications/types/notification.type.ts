import { IsNotEmpty, IsString } from 'class-validator';

export class SystemNotificationData {
  @IsString()
  @IsNotEmpty()
  system_message: string;
}

// export enum NotificationStatusEnum {
//   pending = 0,
//   accepted = 1,
//   rejected = 2,
// }

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

export type NotificationTypeData = SystemNotificationData;

export enum NotificationTypesEnum {
  system = 'system',
  team_invitation = 'team_invitation',
}

export enum NotificationSocketEvents {
  GET_NOTIFICATIONS = 'notifications:get',
}
