import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';
import { toast } from 'sonner';

export const useRemoveFriend = (userId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => await API.delete(`${API_FRIENDSHIP}/${userId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['useGetFriends'] });
      queryClient.invalidateQueries({ queryKey: ['useGetFriendshipStatus', userId] });
      toast('User is removed from the friends list');
    },
    onError: err => {
      toast(`Error occurred: ${err}`);
    },
  });
};
