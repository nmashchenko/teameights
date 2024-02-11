'use client';
import { useQuery } from '@tanstack/react-query';
import { InfinityPaginationResultType, NotificationType } from '@teameights/types';
import { API } from '@/shared/api';
import { API_MESSAGES } from '@/shared/constant';

export const useGetMessages = () => {
  return useQuery({
    queryKey: ['useGetMessages'],
    queryFn: async () => {
      const { data } =
        // TODO: Add right type for messages
        await API.get<InfinityPaginationResultType<any>>(API_MESSAGES);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
