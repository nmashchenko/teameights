import { useRouter } from 'next/router';
import { http } from 'shared/api';

import { errorToaster } from '../../../shared/components/Toasters/Error.toaster';
import { userAuth } from '../../../store/reducers/UserAuth';
import { useMutation } from '@tanstack/react-query';
import { ROUTES } from 'shared/constant/routes';

const { api } = http;

export const useRegister = () => {
  const router = useRouter();
  const registerUser = async (registrationDetails) => {
    return await api.post('/auth/registration', registrationDetails);
  };

  return useMutation(registerUser, {
    mutationKey: 'registerUser',
    onMutate: () => {
      // clear previous error before making new request
      // dispatch(userAuth.actions.authClearError());
    },
    onSuccess: (data) => {
      // save accessToken
      localStorage.setItem('token', data.data.accessToken);
      router.push(ROUTES.confirmEmail);
    },
    onError: (error: Error) => {
      // set error message
      errorToaster(error);
    }
  });
};
