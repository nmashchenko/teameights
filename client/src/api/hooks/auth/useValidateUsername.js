import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import {
  finishRegistrationError,
  setActiveState,
  setStageOneCompleted,
  setStep,
} from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useValidateUsername = (username, email) => {
  const dispatch = useDispatch()
  const validateUsername = async () => {
    return await api.get('/check-username', { params: { username, email } })
  }

  return useQuery('validateUsername', validateUsername, {
    onSuccess: () => {
      dispatch(setActiveState('UserConcentration'))
      dispatch(setStep(2))
      dispatch(setStageOneCompleted(true))
    },
    onError: (error) => {
      dispatch(finishRegistrationError(error.response?.data?.message))
    },
    enabled: false,
  })
}