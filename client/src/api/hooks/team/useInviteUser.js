import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'

const { api } = http

export const useInviteUser = (successHandler) => {
  const queryClient = useQueryClient()

  const inviteUser = async (details) => {
    const { email, teamId, userId } = details
    const response = await api.post('/teams/invite', {
      email,
      teamid: teamId,
      from_user_id: userId,
    })
  }

  return useMutation(inviteUser, {
    mutationKey: 'inviteUser',
    onSuccess: async () => {
      successHandler()
      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
  })
}
