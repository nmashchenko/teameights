import { useMutation } from 'react-query'

import http from '../../axios'

const { api } = http

export const useCreateTeam = () => {
  const createTeam = async (details) => {
    const response = await api.post('/teams/create', details)

    return response.data
  }

  return useMutation(createTeam, {
    mutationKey: 'createTeam',
  })
}
