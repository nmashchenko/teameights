import { User } from 'src/modules/users/entities/user.entity';
import { ChatGroupPermissions, ChatGroupRoles } from '../enums/chat.group.enum';

export interface ChatGroupRole {
  name: ChatGroupRoles;
  permissions?: ChatGroupPermissions[];
}

export interface ChatGroupMember {
  user: User;
  roles: (string | ChatGroupRoles)[];
}

export const ChatGroupRolesDefault = Object.freeze({
  [ChatGroupRoles.MEMBER]: [],
  [ChatGroupRoles.OWNER]: [
    ChatGroupPermissions.CAN_INVITE_USER,
    ChatGroupPermissions.CAN_REMOVE_USER,
    ChatGroupPermissions.CAN_RENAME_GROUP,
    ChatGroupPermissions.CAN_CHANGE_AVATAR,
    ChatGroupPermissions.CAN_CHANGE_DESCRIPTION,
    ChatGroupPermissions.CAN_CHANGE_TITLE,
    ChatGroupPermissions.CAN_CHANGE_MEMBER_ROLE,
    ChatGroupPermissions.CAN_CHANGE_OWNER,
    ChatGroupPermissions.CAN_REMOVE_CURRENT_GROUP,
  ],
});

/**@deprecated */
export interface MessageReader {
  reader: User['id'];
  status: boolean;
}

export interface MessageReaction {
  sender: User['id'];
  emoji: string;
}
