'use client';
import { useQuery } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';

export const useGetFriends = (userId: number) => {
  return useQuery({
    queryKey: ['useGetFriends', userId],
    queryFn: async () => {
      const { data } = await API.get<IUserProtectedResponse>(
        `${API_FRIENDSHIP}/${userId}?filters={"status":"accepted"}`
      );
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
