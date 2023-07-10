import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import ROUTES from '../../../constants/routes'
import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useUpdatePassword = (successHandler) => {
  const navigate = useNavigate()

  const updateUserPassword = async ({ email, token, password }) => {
    return await api.post(`/auth/update-password`, { email, token, password })
  }

  return useMutation(updateUserPassword, {
    mutationKey: 'updateUserPassword',
    onSuccess: async () => {
      if (successHandler) {
        successHandler()
      }

      navigate(ROUTES.login, {
        replace: true,
      })
    },
    onError: (error) => {
      // set error message
      errorToaster(error, 'top-center')

      if (error?.response?.status === 403) {
        setTimeout(() => {
          navigate(ROUTES.login, {
            replace: true,
          })
        }, 1500)
      }
    },
  })
}
