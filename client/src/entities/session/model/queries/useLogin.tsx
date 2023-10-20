import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { ILoginResponse, IRegisterLogin } from '@teameights/types';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: IRegisterLogin) =>
      await API.post<ILoginResponse>('/auth/email/login', data),
    onSuccess: data => {
      const user = data?.data.user;

      //check if user finished full registration
      if (user.status.name === 'Active') {
        console.log(user, 'user');
        toast.success('Logged in!');
      } else {
        // navigate user to finish registration
        // router.push(ROUTES.finishRegistration);
      }
      localStorage.setItem('token', data.data.token);
      Cookies.set('refreshToken', data.data.refreshToken);
    },
    onError: error => {
      toast.error(`Something went wrong: ${error?.message}`);
    },
  });
};
