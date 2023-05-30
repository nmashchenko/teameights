import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { setIsFinishRegistrationStarted, setStep } from '../../../store/reducers/RegistrationAuth'
import { useUpdateAvatar } from '../auth/useUpdateAvatar'

const { api } = http

export const useCreateTeam = (teamAvatar) => {
  const queryClient = useQueryClient()
  const { mutate: updateAvatar } = useUpdateAvatar('teams')
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const createTeam = async (details) => {
    const response = await api.post('/teams/create', details)

    return response.data
  }

  return useMutation(createTeam, {
    mutationKey: 'createTeam',
    onSuccess: async (data) => {
      if (teamAvatar) {
        updateAvatar({ teamID: data._id, image: teamAvatar.split(',')[1] })
      }
      await queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
      dispatch(setIsFinishRegistrationStarted(false))
      dispatch(setStep(1))
      navigate(`/team/${data._id}`)
    },
  })
}
