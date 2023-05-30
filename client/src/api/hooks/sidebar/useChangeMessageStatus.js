import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { registrationAuth } from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useChangeMessageStatus = (teamId) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  let decision
  const acceptOrReject = async ({ action, messageId }) => {
    decision = action

    return await api.put(`teams/invite-${action}/${messageId}`)
  }

  return useMutation(acceptOrReject, {
    mutationKey: 'finishRegistration',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      if (decision === 'accept') {
        queryClient.invalidateQueries(['getTeamById', teamId], { refetchInactive: true })
        navigate(`/team/${teamId}`)
      }
    },
    onError: (error) => {
      // set error message
      dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
    },
  })
}
