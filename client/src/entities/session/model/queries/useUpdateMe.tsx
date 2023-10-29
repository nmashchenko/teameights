import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { ME } from '@/shared/constant';
import { toast } from 'sonner';
import { IUserRequest } from '@teameights/types';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IUserRequest) => await API.patch<IUserRequest>(ME, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['useGetMe'] });
      toast.success('Updated user!');
    },
    onError: error => {
      toast.error(`Failed to update: ${error.message}`);
    },
  });
};
