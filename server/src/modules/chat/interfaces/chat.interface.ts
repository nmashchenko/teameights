import { User } from 'src/modules/users/entities/user.entity';
import { ChatGroupPermissions, ChatGroupRoles } from '../enums/chat.group.enum';

export interface ChatGroupRole {
  name: string | ChatGroupRoles;
  permissions?: (string | ChatGroupPermissions)[];
}

export interface ChatGroupMember {
  user: User;
  roles: (string | ChatGroupRoles)[];
}

export const ChatGroupRolesDefault: ReadonlyArray<ChatGroupRole> = Object.freeze([
  { name: ChatGroupRoles.MEMBER, permissions: [] },
  { name: ChatGroupRoles.OWNER, permissions: Object.values(ChatGroupPermissions) },
]);
