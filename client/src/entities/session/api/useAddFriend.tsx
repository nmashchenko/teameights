import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';
import { toast } from 'sonner';

export const useAddFriend = (userId: number | undefined, receiverId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      await API.post(`${API_FRIENDSHIP}/${receiverId}?user={"id":"${userId}"}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['useGetFriends'] });
      queryClient.invalidateQueries({ queryKey: ['useGetFriendshipStatus', receiverId] });

      toast('Request is sent');
    },
    onError: err => {
      console.log(err);
      toast(`Error occurred: ${err}`);
    },
  });
};
