import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import { userAuth } from '../../../app/providers/store/reducers/UserAuth'
import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useLogoutUser = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const logoutUser = async () => {
    return await api.get('/auth/logout')
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
      errorToaster(error)
    },
  })
}
