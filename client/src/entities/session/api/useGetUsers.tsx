'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { InfinityPaginationResultType, IUserResponse } from '@teameights/types';
import { API } from '@/shared/api';
import { API_USERS } from '@/shared/constant';

export const useGetUsers = (filters?: string | null) => {
  return useInfiniteQuery({
    queryKey: ['useGetUsers', filters],
    queryFn: async ({ queryKey, pageParam }) => {
      let url = `${API_USERS}?page=${pageParam}&limit=9`;
      if (queryKey[1]) {
        url = `${url}&filters=${queryKey[1]}`;
      }
      console.log(url);
      const { data } = await API.get<InfinityPaginationResultType<IUserResponse>>(url);
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? allPages.length + 1 : undefined;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
