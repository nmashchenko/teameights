import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import {
  registrationAuth,
} from '../../../store/reducers/RegistrationAuth'
import {useUpdateUserAvatar} from "./useUpdateUserAvatar";

const { api } = http

export const useEditUserDetails = (successHandler) => {
  const dispatch = useDispatch()
   const {mutate: updateAvatar} =  useUpdateUserAvatar()
  const queryClient = useQueryClient()

  const finishRegistration = async (userData) => {
    return await api.put('/users/update-user', userData)
  }

  return useMutation(finishRegistration, {
    mutationKey: 'finishRegistration',
    onSuccess: ({data}) => {
      successHandler()
      updateAvatar({email: data.email, image: data.image})
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
