export enum ChatGroupRoles {
  OWNER = 'owner',
  MEMBER = 'member',
}

export enum ChatGroupPermissions {
  CAN_INVITE_USER,
  CAN_REMOVE_USER,
  CAN_RENAME_GROUP,
  CAN_CHANGE_AVATAR,
  CAN_CHANGE_DESCRIPTION,
  CAN_CHANGE_TITLE,
  CAN_CHANGE_MEMBER_ROLE,
  CAN_CHANGE_OWNER,
  CAN_REMOVE_CURRENT_GROUP,
}

export enum ChatSocketEvents {
  SEND_MESSAGE = 'message:send',
  GET_MESSAGES = 'message:get',
  DEBUG_MESSAGES = 'message:debug',
  PATCH_MESSAGE = 'message:patch',

  DEBUG_CHAT = 'chat:debug',
}

export enum MessageType {
  FORWARD, //refeferenced
  REPLY, //responsed
  DELETED_ALL,
  DELETED_ME,
  DEFAULT,
  WELCOME,
}

export enum ChatgroupType {
  DIALOG,
  GROUP,
  CHANNEL,
}

export enum ChatgroupVisibility {
  PUBLIC,
  PRIVATE,
}
