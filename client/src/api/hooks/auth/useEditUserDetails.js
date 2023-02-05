import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import {
  registrationAuth,
  setIsFinishRegistrationStarted,
} from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useEditUserDetails = (successHandler) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const finishRegistration = async (userData) => {
    return await api.put('/update-user', userData)
  }

  return useMutation(finishRegistration, {
    mutationKey: 'finishRegistration',
    onSuccess: () => {
      successHandler()
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
