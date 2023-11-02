'use client';
import { useQuery } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { API } from '@/shared/api';
import { API_ME } from '@/shared/constant';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['useGetMe'],
    queryFn: async () => {
      const { data } = await API.get<IUserProtectedResponse>(API_ME);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
