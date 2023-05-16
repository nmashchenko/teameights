import { toast } from 'react-hot-toast'

export const errorToaster = (error) => {
  // Display the toast with the error message
  if (error?.response?.data?.message) {
    toast.error(error?.response?.data?.message, {
      id: error?.response?.data?.message,
      style: { background: '#2F3239', color: 'white' },
    })
  } else {
    let errors = error?.response?.data

    for (let i = 0; i < errors.length; i++) {
      const word = errors[i].split('-')[1]

      setTimeout(() => {
        toast.error(word, {
          id: word,
          style: { background: '#2F3239', color: 'white' },
        })
      }, i * 300) // Delay each notification by i * 100 milliseconds
    }
  }
}
