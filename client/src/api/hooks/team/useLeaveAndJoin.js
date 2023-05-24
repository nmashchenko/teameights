import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { useJoinTeam } from './useJoinTeam'
import { useLeave } from './useLeaveTeam'

export const useLeaveAndJoin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const joinTeamMutation = useJoinTeam()
  const leaveTeamMutation = useLeave()

  const leaveAndJoin = async (details) => {
    await leaveTeamMutation.mutateAsync(details.leaveDetails)

    const joinResult = await joinTeamMutation.mutateAsync(details.joinDetails)

    return joinResult
  }

  const onSuccess = async (joinDetails) => {
    queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    navigate(`/team/${joinDetails._id}`)
  }

  const leaveAndJoinMutation = useMutation(leaveAndJoin, {
    mutationKey: 'leaveAndJoin',
    onSuccess,
  })

  return {
    leaveAndJoin: leaveAndJoinMutation,
    isLeaving: leaveTeamMutation.isLoading,
    isJoining: joinTeamMutation.isLoading,
  }
}
