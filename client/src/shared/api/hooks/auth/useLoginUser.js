import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setIsFinishRegistrationStarted } from '../../../../app/providers/store/reducers/RegistrationAuth'
import { userAuth } from '../../../../app/providers/store/reducers/UserAuth'
import http from '../../../../shared/api/axios'
import ROUTES from '../../../constants/routes'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

const { api } = http

export const useLoginUser = (type) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const loginUser = async (loginDetails) => {
    return type === 'login'
      ? await api.post(`/auth/${type}`, loginDetails)
      : await api.get(`/auth/${type}/${loginDetails.token}`)
  }

  return useMutation(loginUser, {
    mutationKey: type,
    onMutate: () => {
      // clear previous error before making new request
      dispatch(userAuth.actions.authClearError())
      dispatch(setIsFinishRegistrationStarted(false))
    },
    onSuccess: (data) => {
      const user = data?.data.user

      //check if user finished full registration
      if (user.isRegistered) {
        // save accessToken
        dispatch(userAuth.actions.authUserSuccess())
        dispatch(userAuth.actions.setUserNotifications(user?.notifications))
        dispatch(userAuth.actions.setUserId(data?._id))
        navigate('/', { replace: true })
      } else {
        // navigate user to finish registration
        navigate(ROUTES.finishRegistration)
      }
      localStorage.setItem('token', data.data.accessToken)
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
  })
}