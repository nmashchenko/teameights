import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useUpdateAvatar = (type) => {
  const queryClient = useQueryClient()

  const updateUserAvatar = async (userData) => {
    return await api.put(`/${type}/update-avatar`, userData)
  }

  return useMutation(updateUserAvatar, {
    mutationKey: 'updateUserAvatar',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      console.log(error)
      // set error message
      errorToaster(error)
    },
  })
}
