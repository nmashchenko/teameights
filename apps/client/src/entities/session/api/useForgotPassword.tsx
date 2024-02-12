import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IForgotPassword } from '@teameights/types';
import { API_FORGOT_PASSWORD, PASSWORD_CONFIRMATION } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useForgotPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IForgotPassword) => await API.post(API_FORGOT_PASSWORD, data),
    onSuccess: () => {
      router.push(PASSWORD_CONFIRMATION);
    },
  });
};
