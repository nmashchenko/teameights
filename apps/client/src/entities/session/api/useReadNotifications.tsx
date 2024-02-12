import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_NOTIFICATIONS } from '@/shared/constant';

export const useReadNotifications = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // TODO: add types here and change to read all notifications
    mutationFn: async (data: string[]) =>
      await API.patch(API_NOTIFICATIONS, { notification_ids: data }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient
        .invalidateQueries({ queryKey: ['useGetNotifications'] })
        .then(() => console.log('invalidated'));
    },
  });
};
