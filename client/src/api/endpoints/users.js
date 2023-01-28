// * API
import qs from 'qs'

import http from '../../http'
import filteredQueryMaker from '../../utils/filteredQueryMaker'

const { api } = http
const getUsers = async (page) => {
  try {
    const data = await api.get('/users', { params: { page } })

    return data
  } catch (err) {
    console.log(err)

    return err.message
  }
}

const getUsersFiltered = async (page, countries, roles, programmingLanguages) => {
  try {
    const filtersQuery = filteredQueryMaker(countries, roles, programmingLanguages)
    let queryString = qs.stringify(filtersQuery)
    const data = await api.get('/users-filtered', {
      params: { page, filtersQuery: queryString },
    })

    return data
  } catch (err) {
    return err.message
  }
}

const usersApi = Object.freeze({
  getUsers,
  getUsersFiltered,
})

export default usersApi
