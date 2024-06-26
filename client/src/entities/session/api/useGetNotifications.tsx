'use client';
import { useQuery } from '@tanstack/react-query';
import { InfinityPaginationResultType, NotificationType } from '@teameights/types';
import { API } from '@/shared/api';
import { API_NOTIFICATIONS } from '@/shared/constant';

export const useGetNotifications = () => {
  return useQuery({
    queryKey: ['useGetNotifications'],
    queryFn: async () => {
      const { data } =
        await API.get<InfinityPaginationResultType<NotificationType>>(API_NOTIFICATIONS);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 5000,
  });
};
