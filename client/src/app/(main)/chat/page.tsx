'use client';

import { useGetMe } from '@/entities/session';
import { useGetMessages } from '@/entities/session/api/useGetMessages';
import { Chats } from './ui/Chats';
import { SendMessage } from './ui/SendMessage';

export default function Chat() {
  // const { data: user } = useGetMe();
  const { data: groups } = useGetMessages();

  // useSocketConnection1(user)

  console.log(groups)

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <Chats />
      <SendMessage />
    </div>
  );
}
