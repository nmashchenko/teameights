import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

const { api } = http

export const useJoinTeam = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const joinTeam = async (details) => {
    const response = await api.put('/teams/join', details)

    return response.data
  }

  return useMutation(joinTeam, {
    mutationKey: 'addUserToTeam',
    onSuccess: (data) => {
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      navigate(`/team/${data._id}`)
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
