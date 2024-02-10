import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { API_FRIENDSHIP } from '@/shared/constant';
import { toast } from 'sonner';

export const useAddFriend = (userId: string, receiverId: string) => {
  return useMutation({
    mutationFn: async () =>
      await API.post(`${API_FRIENDSHIP}/${receiverId}?user={"id":"${userId}"}`),
    onSuccess: () => {
      toast('Request is sent');
    },
    onError: err => {
      toast(`Error occurred: ${err}`);
    },
  });
};
