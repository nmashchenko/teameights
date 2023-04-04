import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { registrationAuth } from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useUpdateTeamsAvatar = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const updateTeamsAvatar = async (userData) => {
    return await api.put(`/teams/update-avatar`, userData)
  }

  return useMutation(updateTeamsAvatar, {
    mutationKey: 'updateTeamsAvatar',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
