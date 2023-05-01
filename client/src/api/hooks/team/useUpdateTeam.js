import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

export const useUpdateTeam = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const updateTeam = async (details) => {
    const response = await api.put(`/teams/update-team`, details)

    return response.data
  }

  return useMutation(updateTeam, {
    mutationKey: 'updateTeam',
    onSuccess: () => {
      queryClient.invalidateQueries('getTeamById')
    },
  })
}
