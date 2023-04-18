import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'

const { api } = http

export const useTeamMembership = (action) => {
    const queryClient = useQueryClient()

    const toggleMembership = async (details) => {
        const response = await api.put(`/teams/${action}`, { user_id: details.userId, teamid: details.teamId })

        return response.data
    }

    return useMutation(toggleMembership, {
        mutationKey: 'toggleMembership',
        onSuccess: async () => {
            await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
        },
    })
}
