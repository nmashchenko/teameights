import { useMutation, useQueryClient } from 'react-query'

import http from '../../../../shared/api/axios'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'

const { api } = http

// refetch data

export const useRemoveMember = () => {
  const queryClient = useQueryClient()
  const removeMember = async (details) => {
    const response = await api.put(`/teams/remove-member`, details)

    return response.data
  }

  return useMutation(removeMember, {
    mutationKey: 'removeMember',
    onSuccess: async () => {
      await queryClient.invalidateQueries('getTeamById') // useQuery key
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
