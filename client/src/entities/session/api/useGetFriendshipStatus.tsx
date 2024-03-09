'use client';
import { useQuery } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';

interface IFriendshipStatus {
  status: 'none' | 'friends' | 'requested' | 'toRespond';
}

export const useGetFriendshipStatus = (id: number) => {
  return useQuery({
    queryKey: ['useGetFriendshipStatus', id],
    queryFn: async () => {
      const { data } = await API.get<IFriendshipStatus>(`${API_FRIENDSHIP}/status/${id}`);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 5000,
  });
};
