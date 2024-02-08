import { HttpException, UnprocessableEntityException } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { UUID } from 'crypto';
import { Exception } from 'handlebars';
import { Field } from 'multer';

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
