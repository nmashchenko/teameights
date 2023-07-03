import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userAuth } from '../../../../app/providers/store/reducers/UserAuth'
import http from '../../../../shared/api/axios'
import ROUTES from '../../../constants/routes'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

const { api } = http

export const useRegister = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const registerUser = async (registrationDetails) => {
    return await api.post('/auth/registration', registrationDetails)
  }

  return useMutation(registerUser, {
    mutationKey: 'registerUser',
    onMutate: () => {
      // clear previous error before making new request
      dispatch(userAuth.actions.authClearError())
    },
    onSuccess: (data) => {
      // save accessToken
      localStorage.setItem('token', data.data.accessToken)
      dispatch(userAuth.actions.authUserSuccess())
      navigate(ROUTES.confirmEmail)
    },
    onError: (error) => {
      // set error message
      errorToaster(error)
    },
  })
}
