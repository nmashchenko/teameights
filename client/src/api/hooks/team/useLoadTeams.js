import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useSelector } from 'react-redux'
import qs from 'qs'
import uuid from 'uuidv4'

import http from '../../../http'
import checkEntriesForValue from '../../../utils/checkEntriesForValue'
import filteredQueryMaker from '../../../utils/filteredQueryMaker'
import { normalizeFilters } from '../../../utils/normalizeFilters'

const { api } = http

export const useLoadTeams = () => {
  const [filtered, setFiltered] = useState(false)
  const filters = useSelector((state) => state.teamsFilters)

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

  const getTeams = async ({ pageParam = 1 }) => {
    const response = await api.get('/teams', { params: { page: pageParam } })

    console.log(response.data)

    return response.data
  }

  const getTeamsFiltered = async ({ pageParam = 1 }) => {
    const filtersQuery = filteredQueryMaker.teams(
      normalizedFilters.countries,
      normalizedFilters.people,
      normalizedFilters.name,
      normalizedFilters.tag,
    )

    let queryString = qs.stringify(filtersQuery)
    const response = await api.get('/users/get-filtered', {
      params: { page: pageParam, filtersQuery: queryString },
    })

    return response.data
  }

  const query = useInfiniteQuery(
    [filtered ? 'teamsFiltered' : 'teams', id],
    filtered ? getTeamsFiltered : getTeams,
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
