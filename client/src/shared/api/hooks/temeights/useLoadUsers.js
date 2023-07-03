import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useSelector } from 'react-redux'
import qs from 'qs'
import uuid from 'uuidv4'

import http from '../../../../shared/api/axios'
import checkEntriesForValue from '../../../lib/utils/checkEntriesForValue'
import filteredQueryMaker from '../../../lib/utils/filteredQueryMaker'
import { normalizeFilters } from '../../../lib/utils/normalizeFilters'

const { api } = http

export const useLoadUsers = () => {
  const [filtered, setFiltered] = useState(false)
  const filters = useSelector((state) => state.usersFilters)

  const normalizedFilters = normalizeFilters(filters)
  const [id, setId] = useState()

  useEffect(() => {
    if (checkEntriesForValue(filters)) {
      setFiltered(true)
      setId(uuid())
    } else {
      setFiltered(false)
    }
  }, [filters])

  const getUsers = async ({ pageParam = 1 }) => {
    const response = await api.get('/users/get', { params: { page: pageParam } })

    return response.data
  }

  const getUsersFiltered = async ({ pageParam = 1 }) => {
    console.log(normalizedFilters)
    const filtersQuery = filteredQueryMaker.users(
      normalizedFilters.countries,
      normalizedFilters.concentrations,
      normalizedFilters.languages,
      normalizedFilters.frameworks,
      normalizedFilters.name,
    )

    let queryString = qs.stringify(filtersQuery)
    const response = await api.get('/users/get-filtered', {
      params: { page: pageParam, filtersQuery: queryString },
    })

    return response.data
  }

  const query = useInfiniteQuery(
    [filtered ? 'usersFiltered' : 'users', id],
    filtered ? getUsersFiltered : getUsers,
    {
      getNextPageParam: (lastPage, allPages) => {
        return Math.ceil(lastPage.total / lastPage.limit) !== allPages.length
          ? allPages.length + 1
          : undefined
      },
      refetchOnWindowFocus: false,
    },
  )

  return {
    ...query,
    filtered,
  }
}
