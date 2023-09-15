import { ToastPosition, toast } from 'react-hot-toast';

export const successToaster = (
  message: string,
  position: ToastPosition | undefined = 'top-right'
) => {
  if (typeof message === 'string') {
    toast.success(message, {
      id: message,
      style: { background: '#2F3239', color: 'white' },
      position: position,
    });
  }
};
