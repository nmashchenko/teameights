import { useMutation, useQuery, useQueryClient } from 'react-query'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import { successToaster } from '../../../shared/components/Toasters/Success.toaster'

const { api } = http

export const useValidateUsername = () => {
  const validateUsername = async (username) => {
    return await api.get(`/users/get-by-username/${username}`)
  }

  return useMutation(validateUsername, {
    mutationKey: 'validateUsername',
    onSuccess: async (response) => {
      console.log(response)
      if (response?.data) {
        errorToaster('Username is already taken by another user, please change it!')
      } else {
        successToaster('Username is available!')
      }
    },
  })
}
