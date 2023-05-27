import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

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
    onSuccess: () => {
      queryClient.invalidateQueries('getTeamById') // useQuery key
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
