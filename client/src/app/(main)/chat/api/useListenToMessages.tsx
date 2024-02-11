import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { socket } from '@/shared/api/socket';

export const useSocketConnection = (user?: IUserProtectedResponse) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user) {
      return;
    }

    socket.connect();

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    const handleMessages = () => {
      queryClient.invalidateQueries({ queryKey: ['useGetMessages'] });
    };

    socket.on(`message-${user.id}`, handleMessages);

    // Cleanup socket listeners when the component unmounts
    return () => {
      console.log('Disconnecting from WebSocket server...');
      socket.off(`message-${user.id}`, handleMessages);
      socket.disconnect();
    };
  }, [user]);

  console.log(user)
};
