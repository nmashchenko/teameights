import { AxiosError, AxiosResponse } from 'axios';
import { http } from 'shared/api';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from 'shared/api/routes';
import { IRegisterInput, IUserResponse } from '../types';
import { useRouter } from 'next/navigation';

const { api } = http;

export const useRegister = () => {
  const router = useRouter();
  const registerUser = async (
    registrationDetails: IRegisterInput
  ): Promise<AxiosResponse<IUserResponse>> => {
    return await api.post('/auth/registration', registrationDetails);
  };

  return useMutation<AxiosResponse<IUserResponse>, AxiosError, IRegisterInput>(registerUser, {
    mutationKey: ['token'],
    onMutate: () => {
      // clear previous error before making new request
      // dispatch(userAuth.actions.authClearError());
    },
    onSuccess: (data: AxiosResponse<IUserResponse>) => {
      // set received token to localStorage
      localStorage.setItem('token', data.data.accessToken);
      router.push(ROUTES.confirmEmail);
    },
  });
};
