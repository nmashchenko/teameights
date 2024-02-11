import { useGetUsers } from '@/entities/session';
import { IUserResponse } from '@teameights/types';

export const useGetUserByName = (username: string): { data: IUserResponse | undefined } => {
  let users = useGetUsers(JSON.stringify({ username: username }));

  return { data: users?.data?.pages[0]?.data[0] ?? undefined };
};
