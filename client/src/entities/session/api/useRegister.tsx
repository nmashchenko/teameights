import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IRegisterLogin } from '@teameights/types';
import { API_EMAIL_REGISTER, SIGNUP_CONFIRMATION } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IRegisterLogin) => await API.post(API_EMAIL_REGISTER, data),
    onSuccess: () => {
      router.push(SIGNUP_CONFIRMATION);
    },
  });
};
