'use client';
import { useQuery } from '@tanstack/react-query';
import {
  InfinityPaginationResultType,
  IUserProtectedResponse,
  IUserResponse,
} from '@teameights/types';
import { API } from '@/shared/api';
import { API_USERS } from '@/shared/constant';

interface IQueryParams {
  page?: number;
  limit?: number;
  filters?: string | null;
  sort?: string;
}

export const useGetUsers = ({ page, limit, filters, sort }: IQueryParams) => {
  // const queryString = [
  //   page && `page=${page}`,
  //   limit && `limit=${limit}`,
  //   filters && `filters=${filters}`,
  //   sort && `sort=${sort}`,
  // ].join('');

  return useQuery({
    queryKey: ['useGetUsers'],
    queryFn: async () => {
      const { data } = await API.get<InfinityPaginationResultType<IUserResponse>>(`${API_USERS}`);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
