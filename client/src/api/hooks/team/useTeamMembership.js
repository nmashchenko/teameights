import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'

const { api } = http

export const useTeamMembership = (action) => {
  const queryClient = useQueryClient()
  const notify = (err) => toast.error(err, { id: 'error' })

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
      notify(error?.response?.data?.message)
    },
  })
}
