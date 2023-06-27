import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import http from '../../../http'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import { successToaster } from '../../../shared/components/Toasters/Success.toaster'

const { api } = http

export const useGetUserById = (userid) => {
  const navigate = useNavigate()

  const getUserById = async () => {
    return await api.get(`/users/get-by-id/${userid}`)
  }

  const { data, isLoading, error } = useQuery(['getUserById', userid], getUserById, { retry: 0 })

  return { data, isLoading, error }
}
