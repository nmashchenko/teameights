import { useQuery } from 'react-query'

import http from '../../../http'

const { api } = http

export const useGetTeamData = (teamId) => {
  const getTeamById = async () => {
    const response = await api.get(`/teams/get-team/${teamId}`)

    return response.data
  }

  const { data, isLoading: isTeamLoading } = useQuery(['getTeamById', teamId], getTeamById, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!teamId,
  })

  return { data, isLoading: isTeamLoading }
}
