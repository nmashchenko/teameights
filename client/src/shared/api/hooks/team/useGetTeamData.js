import { useQuery } from 'react-query'

import http from '../../axios'

const { api } = http

export const useGetTeamData = (teamId) => {
  const getTeamById = async () => {
    if (teamId) {
      const response = await api.get(`/teams/${teamId}`)

      return response.data
    }
  }

  const {
    data,
    isLoading: isTeamLoading,
    error,
  } = useQuery(['getTeamById', teamId], getTeamById, { retry: 0 })

  return { data, isLoading: isTeamLoading, error }
}
