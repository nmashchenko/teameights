import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IForgotPassword } from '@teameights/types';
import { toast } from 'sonner';
import { API_FORGOT_PASSWORD, PASSWORD_CONFIRMATION } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';

export const useForgotPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IForgotPassword) => await API.post(API_FORGOT_PASSWORD, data),
    onSuccess: () => {
      router.push(PASSWORD_CONFIRMATION);
    },
    onError: error => {
      if (isAxiosError(error)) {
        toast.error(`Something went wrong: ${error?.response?.data?.errors?.email}`);
        return;
      }

      toast.error(`Something went wrong.`);
    },
  });
};
