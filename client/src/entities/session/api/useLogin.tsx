import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { ILoginResponse, IRegisterLogin } from '@teameights/types';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { API_EMAIL_LOGIN, DEFAULT, ONBOARDING } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IRegisterLogin) =>
      await API.post<ILoginResponse>(API_EMAIL_LOGIN, data),
    onSuccess: data => {
      const user = data?.data.user;

      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);
      /*
       * If user has [username] it means he already signed up, so we don't need to
       * redirect him to onboarding, otherwise we should.
       * */
      if (user.username) {
        toast.success('Logged in!');
        router.push(DEFAULT);
      } else {
        toast('User is not registered, redirecting to complete registration!');
        router.push(ONBOARDING);
      }
    },
  });
};
