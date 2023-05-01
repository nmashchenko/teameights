import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

export const useLeave = () => {
  const queryClient = useQueryClient()
  const leaveTeam = async (details) => {
    const response = await api.put(`/teams/leave`, details)

    return response.data
  }

  return useMutation(leaveTeam, {
    mutationKey: 'leaveTeam',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth')
    },
  })
}
