'use client';

import { useGetMessages } from '@/entities/session/api/useGetMessages';
import { Chats } from './ui/Chats';
import { SendMessage } from './ui/SendMessage';
import { createContext, useState } from 'react';

export const CurrentChat = createContext<{ currentChat: any; setCurrentChat: any } | null>(null);

export default function Chat() {
  const { data: groups } = useGetMessages();
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <CurrentChat.Provider value={{ currentChat, setCurrentChat }}>
      <div style={{ display: 'flex', gap: '30px', height: '75vh', width: '100%' }}>
        <Chats />
        <SendMessage />
      </div>
    </CurrentChat.Provider>
  );
}
