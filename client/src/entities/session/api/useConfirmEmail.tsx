import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IConfirmEmail, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { API_EMAIL_CONFIRM, DEFAULT, ONBOARDING } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useConfirmEmail = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IConfirmEmail) =>
      await API.post<ILoginResponse>(API_EMAIL_CONFIRM, data),
    onSuccess: data => {
      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);

      router.push(ONBOARDING);
    },
    onError: () => {
      router.push(DEFAULT);
      toast.error('Invalid email confirmation');
    },
  });
};
