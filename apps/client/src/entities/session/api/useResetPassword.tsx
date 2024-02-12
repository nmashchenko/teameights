import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IResetPassword } from '@teameights/types';
import { API_RESET_PASSWORD, PASSWORD_EXPIRED, PASSWORD_SUCCESS } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useResetPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IResetPassword) => await API.post(API_RESET_PASSWORD, data),
    onSuccess: () => {
      router.push(PASSWORD_SUCCESS);
    },
    onError: () => {
      router.push(PASSWORD_EXPIRED);
    },
  });
};
