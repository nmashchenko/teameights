import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IForgotPassword } from '@teameights/types';
import { toast } from 'sonner';
import { FORGOT_PASSWORD } from '@/shared/constant';
import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';

export const useForgotPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IForgotPassword) => await API.post(FORGOT_PASSWORD, data),
    onSuccess: () => {
      router.push('/password/confirmation');
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
