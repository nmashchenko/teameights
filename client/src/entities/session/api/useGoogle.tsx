import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IGoogleLogin, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { GOOGLE_LOGIN } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useGoogle = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IGoogleLogin) => await API.post<ILoginResponse>(GOOGLE_LOGIN, data),
    onSuccess: data => {
      const user = data?.data.user;
      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);
      //check if user finished full registration
      if (user.username) {
        toast.success('Logged in!');
        router.push('/');
      } else {
        toast('User is not registered, redirecting to complete registration!');
        router.push('/onboarding');
      }
    },
    onError: error => {
      toast.error(`Something went wrong: ${error?.message}`);
    },
  });
};
