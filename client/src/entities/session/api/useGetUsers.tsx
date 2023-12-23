'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { InfinityPaginationResultType, IUserResponse } from '@teameights/types';
import { API } from '@/shared/api';
import { API_USERS } from '@/shared/constant';

interface IQueryParams {
  page?: number;
  limit?: number;
  filters?: string | null;
  sort?: string;
}

export const useGetUsers = (filters?: string | null) => {
  return useInfiniteQuery({
    queryKey: ['useGetUsers', filters],
    queryFn: async ({ queryKey, pageParam }) => {
      console.log(queryKey[1]);
      let url = `${API_USERS}?page=${pageParam}`;
      if (queryKey[1]) {
        url = `${url}&filters=${queryKey[1]}`;
      }
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
