import { useMutation, useQueryClient } from 'react-query'

import { useAppDispatch } from 'shared/model/hooks'
import { userAuth } from '../../../../app/providers/store/reducers/UserAuth'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'
import { infoToaster } from '../../../ui/Toasters/Info.toaster'
import http from '../../axios'
import { socket } from '../../sockets/notifications.socket'

const { api } = http

export const useLogoutUser = () => {
  const dispatch = useAppDispatch()
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

      socket.disconnect()
      socket.offAnyOutgoing()
      socket.offAny()

      // remove user data
      queryClient.setQueryData('checkAuth', () => {
        return null
      })

      queryClient.setQueryData('getTeamById', () => {
        return null
      })

      infoToaster('Successful logout. See you soon!', 'top-center', 2500)
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
  })
}