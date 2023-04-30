import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

export const useJoinTeam = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const addUserToTeam = async (details) => {
    const response = await api.put('/teams/join', details)

    return response.data
  }

  return useMutation(addUserToTeam, {
    mutationKey: 'addUserToTeam',
    onSuccess: async () => {
      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      navigate('/my-team')
    },
  })
}
