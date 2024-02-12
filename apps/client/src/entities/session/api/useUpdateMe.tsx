import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_ME, DEFAULT } from '@/shared/constant';
import { IUserRequest } from '@teameights/types';
import { useRouter } from 'next/navigation';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IUserRequest) => await API.patch<IUserRequest>(API_ME, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient
        .invalidateQueries({ queryKey: ['useGetMe'] })
        .then(() => console.log('invalidated user'));
      router.push(DEFAULT);
    },
  });
};
