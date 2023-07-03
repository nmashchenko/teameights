import { useMutation, useQueryClient } from 'react-query'

import http from '../../../../shared/api/axios'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

const { api } = http

export const useEditUserDetails = (successHandler) => {
  const queryClient = useQueryClient()

  const finishRegistration = async (userData) => {
    return await api.put('/users/update-user', userData)
  }

  return useMutation(finishRegistration, {
    mutationKey: 'finishRegistration',
    onSuccess: (data) => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      queryClient.invalidateQueries('getUserById', { refetchInactive: true })
      if (successHandler) {
        successHandler()
      }
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
  })
}
