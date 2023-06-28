import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useTransferLeader = () => {
  const queryClient = useQueryClient()
  const transferLeader = async (details) => {
    const response = await api.put(`/teams/leader/transfer`, details)

    return response.data
  }

  return useMutation(transferLeader, {
    mutationKey: 'transferLeader',
    onSuccess: async () => {
      await queryClient.invalidateQueries('getTeamById')
      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
