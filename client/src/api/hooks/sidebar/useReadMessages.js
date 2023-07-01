import { useMutation } from 'react-query'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useReadMessages = () => {
  const readMessages = async (idsArr) => {
    return await api.put('notifications/read', { notifications: idsArr })
  }

  return useMutation(readMessages, {
    mutationKey: 'readMessages',
    onSuccess: () => {
      console.log('success!')
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
  })
}
