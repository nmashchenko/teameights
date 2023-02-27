import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

export const useDelete = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const deleteTeam = async (teamId) => {
    const response = await api.delete(`/teams/delete/${teamId}`)

    return response.data
  }

  return useMutation(deleteTeam, {
    mutationKey: 'deleteTeam',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      navigate('/team')
    },
  })
}