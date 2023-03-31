import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

// refetch data

export const useRemoveMember = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const removeMember = async (details) => {
    console.log('CALLED REMOVE')
    console.log(details)
    const response = await api.put(`/teams/remove-member`, details)

    return response.data
  }

  return useMutation(removeMember, {
    mutationKey: 'removeMember',
    onSuccess: () => {
      queryClient.invalidateQueries('getTeamById') // useQuery key
    },
  })
}
