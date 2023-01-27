import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'

const { api } = http

export const useAddUserToTeam = () => {
  const queryClient = useQueryClient()

  const addUserToTeam = async (details) => {
    const response = await api.post('/add-to-team', details)

    return response.data
  }

  return useMutation(addUserToTeam, {
    mutationKey: 'addUserToTeam',
    onSuccess: () => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
  })
}
