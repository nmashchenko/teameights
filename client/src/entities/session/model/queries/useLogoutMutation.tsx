import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@/shared/api';
import { toast } from "react-hot-toast";
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

      // remove user data
      queryClient.setQueryData(['checkAuth'], () => {
        return null;
      });

      queryClient.setQueryData(['getTeamById'], () => {
        return null;
      });

      toast.success('Successful logout. See you soon!')
    },
    meta: { errorMessage: 'Failed to user logout' },
  });
};
