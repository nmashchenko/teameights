import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http, socket } from 'shared/api';
import { infoToaster } from 'shared/ui';
const { api } = http;

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logoutUser = async () => {
    return await api.get('/auth/logout');
  };

  return useMutation(logoutUser, {
    mutationKey: ['logoutUser'],
    onSuccess: () => {
      // remove accessToken
      localStorage.removeItem('token');

      socket.disconnect();
      socket.offAnyOutgoing();
      socket.offAny();

      // remove user data
      queryClient.setQueryData(['checkAuth'], () => {
        return null;
      });

      queryClient.setQueryData(['getTeamById'], () => {
        return null;
      });

      infoToaster('Successful logout. See you soon!', 'top-center', 2500);
    },
  });
};
