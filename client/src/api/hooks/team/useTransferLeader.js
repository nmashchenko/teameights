import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

export const useTransferLeader = () => {
  const queryClient = useQueryClient()
  const transferLeader = async (details) => {
    const response = await api.put(`/teams/leader/transfer`, details)

    return response.data
  }

  return useMutation(transferLeader, {
    mutationKey: 'transferLeader',
    onSuccess: () => {
      queryClient.invalidateQueries('getTeamById')
    },
  })
}
