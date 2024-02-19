'use client';
import { useQuery } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';
import { IUserBase, Timestamps } from '@teameights/types';

interface IFriendshipResponse extends Timestamps {
  id: number;
  status: 'accepted' | 'rejected' | 'pending';
  creator: IUserBase;
  receiver: IUserBase;
}

export const useGetFriends = (userId: number) => {
  return useQuery({
    queryKey: ['useGetFriends', userId],
    queryFn: async () => {
      const { data } = await API.get<{ data: Array<IFriendshipResponse> }>(
        `${API_FRIENDSHIP}/${userId}?filters={"status":"accepted"}`
      );
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
