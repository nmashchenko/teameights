import { useQuery } from '@tanstack/react-query';
import { IUserProtectedResponse } from '@teameights/types';
import { API } from '@/shared/api';
import { ME } from '@/shared/constant';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['useGetMe'],
    queryFn: async () => {
      const { data } = await API.get<IUserProtectedResponse>(ME);
      return data;
    },
  });
};
