import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IConfirmEmail, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { EMAIL_CONFIRM } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useConfirmEmail = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IConfirmEmail) => await API.post<ILoginResponse>(EMAIL_CONFIRM, data),
    onSuccess: data => {
      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);

      router.push('/onboarding');
    },
    onError: error => {
      toast.error(`Something went wrong: ${error?.message}`);
    },
  });
};
