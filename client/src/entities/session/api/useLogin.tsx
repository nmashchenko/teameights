import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { ILoginResponse, IRegisterLogin } from '@teameights/types';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { EMAIL_LOGIN } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IRegisterLogin) => await API.post<ILoginResponse>(EMAIL_LOGIN, data),
    onSuccess: data => {
      const user = data?.data.user;

      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);
      //check if user finished full registration
      if (user.username) {
        toast.success('Logged in!');
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
