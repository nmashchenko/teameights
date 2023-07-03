import { useMutation } from 'react-query'

import http from '../../../../shared/api/axios'
import { errorToaster } from '../../../ui/Toasters/Error.toaster'
import { successToaster } from '../../../ui/Toasters/Success.toaster'

const { api } = http

export const useGetByTag = () => {
  const getTeamByTag = async (tag) => {
    return await api.get(`/teams/tag/${tag}`)
  }

  return useMutation(getTeamByTag, {
    mutationKey: 'getTeamByTag',
    onSuccess: async (response) => {
      if (response?.data) {
        errorToaster('TAG is already taken by another team, please change it!')
      } else {
        successToaster('Tag is available!')
      }
    },
  })
}
