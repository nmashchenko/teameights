import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'

const { api } = http

export const useLeaveAndJoin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const leaveAndJoin = async (details) => {
    const leave = await api.put(`/teams/leave`, details)

    const join = await api.put('/teams/join', details)

    return { leave: leave.data, join: join.data }
  }

  return useMutation(leaveAndJoin, {
    mutationKey: 'leaveAndJoin',
    onSuccess: async () => {
      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      navigate('/my-team')
    },
  })
}
