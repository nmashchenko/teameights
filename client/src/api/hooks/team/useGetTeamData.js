import { useQuery } from 'react-query'

import http from '../../../http'

const { api } = http

export const useGetTeamData = (teamId) => {
  const getTeamById = async () => {
    if (teamId) {
      const response = await api.get(`/teams/${teamId}`)

      return response.data
    }
  }

  const { data, isLoading: isTeamLoading } = useQuery(['getTeamById', teamId], getTeamById)

  return { data, isLoading: isTeamLoading }
}
