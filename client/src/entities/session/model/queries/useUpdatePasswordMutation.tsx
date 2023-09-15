import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { http } from 'shared/api';

import { ROUTES } from 'shared/api/routes';
import { IPasswordUpdateRequest } from '../types';
import { AxiosError } from 'axios';

const { api } = http;

export const useUpdatePassword = (successHandler?: () => void) => {
  const router = useRouter();

  const updateUserPassword = async ({ email, token, password }: IPasswordUpdateRequest) => {
    return await api.post(`/auth/update-password`, { email, token, password });
  };

  return useMutation<unknown, AxiosError, IPasswordUpdateRequest>(updateUserPassword, {
    mutationKey: ['updateUserPassword'],
    onSuccess: async () => {
      if (successHandler) {
        successHandler();
      }

      router.replace(ROUTES.login);
    },
    onError: error => {
      // set error message
      if (error?.response?.status === 403) {
        setTimeout(() => {
          router.replace(ROUTES.login);
        }, 1500);
      }
    },
    meta: { errorMessage: 'Failed update user password' },
  });
};
