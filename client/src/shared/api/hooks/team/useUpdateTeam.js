import { useMutation, useQueryClient } from 'react-query'

import http from '../../../../shared/api/axios'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

const { api } = http

export const useUpdateTeam = () => {
  const queryClient = useQueryClient()
  const updateTeam = async (details) => {
    const response = await api.put(`/teams/update-team`, details)

    return response.data
  }

  return useMutation(updateTeam, {
    mutationKey: 'updateTeam',
    onSuccess: () => {
      queryClient.invalidateQueries('getTeamById')
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
