import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IResetPassword } from '@teameights/types';
import { RESET_PASSWORD } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useResetPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IResetPassword) => await API.post(RESET_PASSWORD, data),
    onSuccess: () => {
      router.push('/password/success');
    },
    onError: error => {
      console.log(error);
      router.push('/password/expired');
    },
  });
};
