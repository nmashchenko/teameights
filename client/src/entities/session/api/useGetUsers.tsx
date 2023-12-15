'use client';
import { useQuery } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { API } from '@/shared/api';
import { API_USERS } from '@/shared/constant';
import { IFilterParams } from '@/widgets/search/types';

interface IQueryParams {
  page?: number;
  limit?: number;
  filters?: IFilterParams | null;
  sort?: string;
}

export const useGetUsers = ({ page, limit, filters, sort }: IQueryParams) => {
  const queryString = [
    page && `page=${page}`,
    limit && `limit=${limit}`,
    filters && `filters=${JSON.stringify(filters)}`,
    sort && `sort=${sort}`,
  ].join('');

  return useQuery({
    queryKey: ['useGetUsers', queryString],
    queryFn: async () => {
      const { data } = await API.get<IUserProtectedResponse>(`${API_USERS}?${queryString}`);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
