import { useMutation, useQueryClient } from 'react-query'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import { successToaster } from '../../../shared/components/Toasters/Success.toaster'

const { api } = http

export const useGetByTag = () => {
  const getTeamByTag = async (tag) => {
    return await api.get(`/teams/tag/${tag}`)
  }

  return useMutation(getTeamByTag, {
    mutationKey: 'getTeamByTag',
    onSuccess: async (response) => {
      if (response?.data) {
        errorToaster('TAG is already taken by another team, please change it!', 'top-center')
      } else {
        successToaster('Tag is available!', 'top-center')
      }
    },
  })
}
