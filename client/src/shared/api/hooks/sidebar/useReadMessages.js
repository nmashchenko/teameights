import { useMutation } from 'react-query'

import http from '../../../../shared/api/axios'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

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
