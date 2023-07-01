import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import { userAuth } from '../../../store/reducers/UserAuth'

const { api } = http

export const useCheckAuth = () => {
  const dispatch = useDispatch()
  const checkAuth = async () => {
    const response = await api.get(`/users/get-by-token`)

    return response.data
  }

  return useQuery('checkAuth', checkAuth, {
    onSuccess: (data) => {
      if (data && data.isRegistered) {
        dispatch(userAuth.actions.authUserSuccess())
        dispatch(userAuth.actions.setUserNotifications(data?.notifications))
        dispatch(userAuth.actions.setUserId(data?._id))
      }
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!localStorage.getItem('token'),
  })
}
