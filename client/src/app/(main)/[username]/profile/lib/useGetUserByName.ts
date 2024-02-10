import { useGetUsers } from '@/entities/session';

export const useGetUserByName = (username: string) => {
  return useGetUsers({ filters: JSON.stringify({ username }) });
};
