import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useTeamMembership = (action) => {
  const queryClient = useQueryClient()

  const toggleMembership = async (details) => {
    return await api.put(`/teams/${action}`, {
      user_id: details.userId,
      teamid: details.teamId,
    })
  }

  return useMutation(toggleMembership, {
    mutationKey: 'toggleMembership',
    onSuccess: async (result) => {
      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })

      return result.data
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
