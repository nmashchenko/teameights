import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { IRegisterLogin } from '@teameights/types';
import { toast } from 'sonner';
import { EMAIL_REGISTER } from '@/shared/constant';
import { useRouter } from 'next/navigation';

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: IRegisterLogin) => await API.post(EMAIL_REGISTER, data),
    onSuccess: () => {
      router.push('/signup/confirmation');
    },
    onError: error => {
      toast.error(`Something went wrong: ${error?.message}`);
    },
  });
};
