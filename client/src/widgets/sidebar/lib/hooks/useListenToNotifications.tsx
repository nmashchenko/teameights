import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { socket } from '@/shared/api/socket';
import { IUserProtectedResponse } from '@teameights/types';

export const useSocketConnection = (user?: IUserProtectedResponse) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user) {
      return;
    }
    const handleConnect = () => {
      console.log('connected');
    };

    const handleDisconnect = () => {
      console.log('disconnected');
    };

    const handleNotification = () => {
      queryClient
        .invalidateQueries({ queryKey: ['useGetNotifications'] })
        .then(() => console.log('notification added'));
    };

    const setupSocketListeners = () => {
      socket.on('connect', handleConnect);
      socket.on('disconnect', handleDisconnect);
      socket.on(`notification-${user.id}`, handleNotification);
    };

    const cleanupSocketListeners = () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off(`notification-${user.id}`, handleNotification);
    };

    setupSocketListeners();

    // Cleanup socket listeners when the component unmounts
    return cleanupSocketListeners;
  }, [user, queryClient]);
};
