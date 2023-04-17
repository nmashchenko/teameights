import React from 'react'
import { useQuery } from 'react-query'

import http from '../../../http'
import { useCheckAuth } from '../auth/useCheckAuth'

const { api } = http

<<<<<<< HEAD
export const useGetTeamData = (teamId) => {
=======
export const useGetTeamData = () => {
  const { data: user, isLoading: isUserLoading } = useCheckAuth()
  const teamId = user?.team?._id

>>>>>>> dev
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
