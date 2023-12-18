import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_NOTIFICATIONS } from '@/shared/constant';

export const useReadNotifications = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // TODO: add types here
    mutationFn: async (id: string) => await API.patch(API_NOTIFICATIONS + `/${id}`),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient
        .invalidateQueries({ queryKey: ['useGetNotifications'] })
        .then(() => console.log('invalidated'));
    },
  });
};
