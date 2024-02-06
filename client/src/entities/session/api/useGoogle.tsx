import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IGoogleLogin, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { DEFAULT, API_GOOGLE_LOGIN, ONBOARDING } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useGoogle = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IGoogleLogin) =>
      await API.post<ILoginResponse>(API_GOOGLE_LOGIN, data),
    onSuccess: data => {
      const user = data?.data.user;
      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);
      /*
       * If user has username it means he already signed up, so we don't need to
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
    onError: () => {
      router.push(DEFAULT);
      toast.error('Invalid google login');
    },
  });
};
