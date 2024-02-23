import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';
import { toast } from 'sonner';

export const useHandleFriendshipRequest = (
  userId: number | undefined,
  receiverId: number,
  status: 'rejected' | 'accepted'
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      await API.patch(`${API_FRIENDSHIP}/${receiverId}?user={"id":"${userId}"}`, {
        status,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['useGetFriends'] });
      if (status === 'accepted') {
        toast('New friend added');
      } else {
        toast('Friend request declined');
      }
    },
    onError: err => {
      toast(`Error occurred: ${err}`);
    },
  });
};
