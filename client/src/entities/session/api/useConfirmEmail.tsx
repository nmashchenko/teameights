import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IConfirmEmail, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { API_EMAIL_CONFIRM, DEFAULT, LOGIN } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useConfirmEmail = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IConfirmEmail) =>
      await API.post<ILoginResponse>(API_EMAIL_CONFIRM, data),
    onSuccess: () => {
      toast.success('Successful confirmation! Log into your account.');
      router.push(LOGIN);
    },
    onError: () => {
      toast.error('Invalid email confirmation');
      router.push(DEFAULT);
    },
  });
};
