import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import { successToaster } from '../../../shared/components/Toasters/Success.toaster'

const { api } = http

export const useInviteUser = () => {
  const queryClient = useQueryClient()

  const inviteUser = async (details) => {
    const { email, teamid, from_user_id } = details

    console.log(details)

    const response = await api.post('/teams/invite', {
      email,
      teamid: teamid,
      from_user_id: from_user_id,
    })
  }

  return useMutation(inviteUser, {
    mutationKey: 'inviteUser',
    onSuccess: () => {
      successToaster('User was successfully invited.')
      queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
    },
    onError: (error) => {
      errorToaster(error)
    },
  })
}
