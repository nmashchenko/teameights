import React, { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useSelector } from 'react-redux'
import qs from 'qs'
import uuid from 'uuidv4'

import http from '../../../http'
import filteredQueryMaker from '../../../utils/filteredQueryMaker'

const { api } = http

export const useLoadUsers = (isFiltered) => {
  const { filters } = useSelector((state) => state.sharedReducer)

  const [id, setId] = useState()

  useEffect(() => {
    setId(uuid())
  }, [filters])

  const getUsers = async ({ pageParam = 1 }) => {
    const response = await api.get('/users', { params: { page: pageParam } })

    return response.data
  }
  const getUsersFiltered = async ({ pageParam = 1 }) => {
    const filtersQuery = filteredQueryMaker(
      filters.countries,
      filters.roles,
      filters.programmingLanguages,
      filters.frameworks,
    )
    let queryString = qs.stringify(filtersQuery)
    const response = await api.get('/users-filtered', {
      params: { page: pageParam, filtersQuery: queryString },
    })

    return response.data
  }

  return useInfiniteQuery(
    [isFiltered ? 'usersFiltered' : 'users', id],
    isFiltered ? getUsersFiltered : getUsers,
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next && lastPage.results.length === lastPage.next.limit
          ? allPages.length + 1
          : undefined
      },
      refetchOnWindowFocus: false,
    },
  )
}
