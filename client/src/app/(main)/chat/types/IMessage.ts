import { IUserResponse } from "@teameights/types";

export interface Message {
  senderId: string;
  receivers: Array<IUserResponse>;
  groupId?: string;
  isMessageRead: Array<IUserResponse>;
  text: string;
  fileId?: string;
  isThisMessageMine: boolean;
  timestamp: string;
}
