import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { userAuth } from '../../../store/reducers/UserAuth'

const { api } = http

export const useLogoutUser = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const logoutUser = async () => {
    return await api.post('/logout')
  }

  return useMutation(logoutUser, {
    mutationKey: 'logoutUser',
    onSuccess: (data) => {
      // remove accessToken && set isAuth to false
      localStorage.removeItem('token')
      dispatch(userAuth.actions.authUserLogout())

      // remove user data
      queryClient.setQueryData('checkAuth', () => {
        return null
      })

      queryClient.setQueryData('getTeamById', () => {
        return null
      })
    },
    onError: (error) => {
      // set error message
      dispatch(userAuth.actions.authUserError(error.response?.data?.message))
    },
  })
}
