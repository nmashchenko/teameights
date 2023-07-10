import { toast } from 'react-hot-toast'

export const errorToaster = (error, position = 'right-top') => {
  if (typeof error === 'string') {
    toast.error(error, {
      id: error,
      style: { background: '#2F3239', color: 'white' },
      duration: 2000,
      position: position,
    })
  }
  // Display the toast with the error message
  else if (error?.response?.data?.length === 1 && !error?.response?.data?.message) {
    toast.error(error?.response?.data[0], {
      id: error?.response?.data[0],
      style: { background: '#2F3239', color: 'white' },
      duration: 2000,
      position: position,
    })
  } else if (error?.response?.data?.message) {
    toast.error(error?.response?.data?.message, {
      id: error?.response?.data?.message,
      style: { background: '#2F3239', color: 'white' },
      duration: 2000,
      position: position,
    })
  } else if (error?.response?.data?.length > 1) {
    let errors = error?.response?.data

    for (let i = 0; i < errors.length; i++) {
      const word = errors[i].split('-')[1]

      setTimeout(() => {
        toast.error(word, {
          id: word,
          style: { background: '#2F3239', color: 'white' },
          duration: 2000,
          position: position,
        })
      }, i * 300) // Delay each notification by i * 100 milliseconds
    }
  } else {
    toast.error('Unkwnown error, try again later!', {
      id: 'Unkwnown error, try again later!',
      style: { background: '#2F3239', color: 'white' },
      duration: 2000,
      position: position,
    })
  }
}
