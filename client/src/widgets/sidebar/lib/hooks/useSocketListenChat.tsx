import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { socketManager } from '@/shared/api/socket';

export const useSocketListenChat = (user?: IUserProtectedResponse) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user) return;

    const socket = socketManager.socket('/chat');

    socket.connect()

    //login



    //----

    socket.on('connect_error', (error: Error)=>{
      console.error(`${error}`)
    })

    return () => {
      socket.disconnect();
    };
  }, [user, queryClient]);
}