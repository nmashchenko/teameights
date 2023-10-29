import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IGithubLogin, ILoginResponse } from '@teameights/types';
import { toast } from 'sonner';
import { GITHUB_LOGIN } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useGithub = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IGithubLogin) => await API.post<ILoginResponse>(GITHUB_LOGIN, data),
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
