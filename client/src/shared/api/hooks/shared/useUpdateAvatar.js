import { useMutation, useQueryClient } from 'react-query'

import http from '../../../../shared/api/axios'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

const { api } = http

export const useUpdateAvatar = (type, successHandler) => {
  const queryClient = useQueryClient()

  const updateUserAvatar = async (userData) => {
    return await api.put(`/${type}/update-avatar`, userData)
  }

  return useMutation(updateUserAvatar, {
    mutationKey: 'updateUserAvatar',
    onSuccess: async () => {
      if (type === 'teams') {
        await queryClient.invalidateQueries('getTeamById', { refetchInactive: true })
      } else if (type === 'users') {
        await queryClient.invalidateQueries('getUserById', { refetchInactive: true })
      }

      if (successHandler) {
        successHandler()
      }

      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
  })
}
