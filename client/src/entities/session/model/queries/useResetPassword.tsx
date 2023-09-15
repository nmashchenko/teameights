import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { http } from 'shared/api';
import { ROUTES } from 'shared/api/routes';

const { api } = http;

export const useResetPassword = (successHandler: () => void) => {
  const router = useRouter();

  const updateUserPassword = async (email: string) => {
    return await api.get(`/auth/reset-password/${email}`);
  };

  return useMutation(updateUserPassword, {
    mutationKey: ['updateUserPassword'],
    onSuccess: async () => {
      if (successHandler) {
        successHandler();
      }
      router.replace(ROUTES.confirmEmail);
    },
  });
};
