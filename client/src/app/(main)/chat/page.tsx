'use client';

import { Chats } from './ui/Chats';
import { SendMessage } from './ui/SendMessage';

export default function Chat() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Chats />
      <SendMessage />
    </div>
  );
}
