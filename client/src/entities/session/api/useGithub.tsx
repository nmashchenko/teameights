import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IGithubLogin, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { API_GITHUB_LOGIN, DEFAULT, ONBOARDING } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useGithub = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IGithubLogin) =>
      await API.post<ILoginResponse>(API_GITHUB_LOGIN, data),
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
    onError: error => {
      toast.error(`Something went wrong: ${error?.message}`);
    },
  });
};
