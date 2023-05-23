import { useMutation, useQuery, useQueryClient } from 'react-query'

import http from '../../../http'

const { api } = http

export const useGetAllTeams = () => {
  const getAllTeams = async () => {
    const response = await api.get(`/teams/all`)

    return response.data
  }

  return useQuery('getAllTeams', getAllTeams)
}
