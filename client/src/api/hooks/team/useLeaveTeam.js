import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useLeave = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const leaveTeam = async (details) => {
    const response = await api.put(`/teams/leave`, details)

    return response.data
  }

  return useMutation(leaveTeam, {
    mutationKey: 'leaveTeam',
    onSuccess: () => {
      queryClient.invalidateQueries('getTeamById', { refetchInactive: true })
      queryClient.invalidateQueries('checkAuth')
      navigate(`/teams`)
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
