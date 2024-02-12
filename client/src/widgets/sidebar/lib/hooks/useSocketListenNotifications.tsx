import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { socketManager } from '@/shared/api/socket';

export const useSocketListenNotifications = (user?: IUserProtectedResponse) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user) return;

    const socket = socketManager.socket('/notifications');

    socket.connect()

    const handleNotification = () => {
      queryClient.invalidateQueries({ queryKey: ['useGetNotifications'] });
    };

    socket.on(`notifications:get`, handleNotification);

    socket.on('connect_error', (error: Error)=>{
      console.error(`${error}`)
    })

    return () => {
      socket.off(`notification:get`, handleNotification);
      socket.disconnect();
    };
  }, [user, queryClient]);
}