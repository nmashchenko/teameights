import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_ME } from '@/shared/constant';
import { toast } from 'sonner';
import { IUserRequest } from '@teameights/types';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IUserRequest) => await API.patch<IUserRequest>(API_ME, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient
        .invalidateQueries({ queryKey: ['useGetMe'] })
        .then(() => console.log('invalidated'));
      toast.success('Updated user!');
    },
  });
};
