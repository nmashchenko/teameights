// * API
import api from '../../http'

const getUsers = async (page) => {
  try {
    const data = await api.get('/users', { params: { page } })
    return data
  } catch (err) {
    console.log(err)
  }
}

const getUsersFiltered = async (countries, roles, programmingLanguages) => {
  try {
    const data = await api.post('/users-filtered', { countries, roles, programmingLanguages })
    return data
  } catch (err) {
    console.log(err)
  }
}

const usersApi = Object.freeze({
  getUsers,
  getUsersFiltered,
})

export default usersApi
