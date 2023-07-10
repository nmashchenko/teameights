import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import ROUTES from '../../../constants/routes'
import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useResetPasssword = (successHandler) => {
  const navigate = useNavigate()

  const updateUserPassword = async (email) => {
    return await api.get(`/auth/reset-password/${email}`)
  }

  return useMutation(updateUserPassword, {
    mutationKey: 'updateUserPassword',
    onSuccess: async () => {
      if (successHandler) {
        successHandler()
      }

      navigate(ROUTES.confirmEmail, {
        replace: true,
      })
    },
    onError: (error) => {
      // set error message
      errorToaster(error, 'top-center')
    },
  })
}
