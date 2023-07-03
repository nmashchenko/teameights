import { useMutation } from 'react-query'

import http from '../../axios'

const { api } = http

export const useGetUserByUsername = () => {
  const useGetUserByUsername = async (username) => {
    const response = await api.get(`/users/partial/${username}`)

    const responseArr = response.data

    const foundUsers = responseArr.map(({ username, image, _id, email }) => ({
      username,
      image,
      id: _id,
      email,
    }))

    return foundUsers
  }

  return useMutation(useGetUserByUsername, {
    mutationKey: 'useGetUserByUsername',
  })
}
