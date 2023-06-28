import { toast } from 'react-hot-toast'

export const infoToaster = (message) => {
  if (typeof message === 'string') {
    toast(message, {
      id: message,
      style: { background: '#2F3239', color: 'white' },
      duration: 1000,
      icon: '⚡️',
      position: 'bottom-right',
    })
  }
}
