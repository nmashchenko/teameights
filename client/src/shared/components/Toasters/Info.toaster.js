import { toast } from 'react-hot-toast'

export const infoToaster = (message, position = 'bottom-right', duration = 1000) => {
  if (typeof message === 'string') {
    toast(message, {
      id: message,
      style: { background: '#2F3239', color: 'white' },
      duration: duration,
      icon: '⚡️',
      position: position,
    })
  }
}
