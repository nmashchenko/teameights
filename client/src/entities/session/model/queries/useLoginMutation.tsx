import { AxiosError, AxiosResponse } from 'axios';
import { http, queryClient } from 'shared/api';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from 'shared/api/routes';
import { ILoginInput, IUserResponse } from '../types';
import { useRouter } from 'next/navigation';

const { api } = http;

export const useLogin = (type: string) => {
  const router = useRouter();
  const loginUser = async (loginDetails: ILoginInput) => {
    return type === 'login'
      ? await api.post(`/auth/${type}`, loginDetails)
      : await api.get(`/auth/${type}/${loginDetails.token}`);
  };

  return useMutation<AxiosResponse<IUserResponse>, AxiosError, ILoginInput>(loginUser, {
    mutationKey: [`${type}`],
    onSuccess: data => {
      const user = data?.data.user;

      //check if user finished full registration
      if (user.isRegistered) {
        console.log(user, 'user');
        // save accessToken

        router.replace(ROUTES.finishRegistration);
      } else {
        // navigate user to finish registration
        router.push(ROUTES.finishRegistration);
      }
      localStorage.setItem('token', data.data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['checkAuth'], refetchType: 'inactive' });
    },
  });
};
