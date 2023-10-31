import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { LOGOUT } from '@/shared/constant';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => await API.post(LOGOUT),
    onSuccess: () => {
      localStorage.removeItem('token');
      Cookies.remove('refreshToken');
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['useGetMe'] });
      toast.success('Successful logout. See you soon!');
    },
    onError: () => {
      toast.error('Failed to logout');
    },
  });
};
