import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../http'
import { userAuth } from '../../store/reducers/UserAuth'

const { api } = http

export const useCheckAuth = () => {
  const dispatch = useDispatch()
  const checkAuth = async () => {
    return await api.get(`/get-user-object`)
  }

  return useQuery('checkAuth', checkAuth, {
    onSuccess: (data) => {
      const user = data?.data

      if (user && user.isRegistered) {
        dispatch(userAuth.actions.authUserSuccess())
      }
    },
    onError: (error) => {
      dispatch(userAuth.actions.authUserError(error.response?.data?.message))
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!localStorage.getItem('token'),
  })
}
