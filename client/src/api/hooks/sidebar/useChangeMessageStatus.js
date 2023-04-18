import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import { registrationAuth } from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useChangeMessageStatus = (teamId) => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const acceptOrReject = async ({ status, messageId }) => {
    if (status) {
      return await api.put(`teams/invite-accept/${messageId}`)
    } else {
      return await api.put(`teams/invite-reject/${messageId}`)
    }
  }

  return useMutation(acceptOrReject, {
    mutationKey: 'finishRegistration',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      queryClient.invalidateQueries(['getTeamById', teamId], { refetchInactive: true })
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
