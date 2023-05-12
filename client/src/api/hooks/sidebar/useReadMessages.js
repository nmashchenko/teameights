import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { registrationAuth } from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useReadMessages = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

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
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
