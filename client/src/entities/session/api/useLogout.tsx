import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_LOGOUT } from '@/shared/constant';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => await API.post(API_LOGOUT),
    onSuccess: () => {
      localStorage.removeItem('token');
      Cookies.remove('refreshToken');

      toast.success('Successful logout. See you soon!');
      return queryClient
        .resetQueries({ queryKey: ['useGetMe'], exact: true })
        .then(() => console.log('cleared'));
    },
    onError: error => {
      console.log(error);
      toast.error('Failed to logout, you are not logged in!');
    },
  });
};
