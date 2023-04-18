import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { registrationAuth } from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useUpdateAvatar = (type) => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const updateUserAvatar = async (userData) => {
    return await api.put(`/${type}/update-avatar`, userData)
  }

  return useMutation(updateUserAvatar, {
    mutationKey: 'updateUserAvatar',
    onSuccess: () => {
      if (type === 'users') {
        queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      } else {
        const user = queryClient.getQueryData('checkAuth')

        if (user?.team) {
          queryClient.invalidateQueries(['getTeamById', user?.team?._id], { refetchInactive: true })
        }
      }
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
