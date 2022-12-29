import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import http from '../../http'
import {
  registrationAuth,
  setIsFinishRegistrationStarted,
} from '../../store/reducers/RegistrationAuth'

const { api } = http

export const useFinishRegistration = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const finishRegistration = async (userData) => {
    return await api.post('/registration-checkout', userData)
  }

  return useMutation(finishRegistration, {
    mutationKey: 'finishRegistration',
    onSuccess: () => {
      dispatch(setIsFinishRegistrationStarted(false))
      navigate('/', { replace: true })
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
