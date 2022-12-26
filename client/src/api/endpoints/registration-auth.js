// * Modules
import axios from 'axios'

// * API
import http from '../../http'
// * Redux
import { registrationAuth } from '../../store/reducers/RegistrationAuth'

const { API_URL, api } = http

const checkRegistration = () => async (dispatch) => {
  try {
    dispatch(registrationAuth.actions.finishRegistration())
    const response = await axios.get(`${API_URL}/get-user-object`, { withCredentials: true })
    let { isRegistered, email, userUsername } = response.data

    dispatch(
      registrationAuth.actions.setUserInitialData({
        email,
        isRegistered,
        userUsername,
      }),
    )
  } catch (err) {
    dispatch(registrationAuth.actions.finishRegistrationError(err.response?.data?.message))
  }
}

const finishRegistration = (userData) => async (dispatch) => {
  try {
    dispatch(registrationAuth.actions.finishRegistration())
    await api.post('/registration-checkout', userData)
    dispatch(registrationAuth.actions.finishRegistrationSuccess())
  } catch (err) {
    dispatch(registrationAuth.actions.finishRegistrationError(err.response?.data?.message))
  }
}

const validateUsername = async (username, email) => {
  try {
    const response = await api.get('/check-username', { params: { username, email } })

    return response.data
  } catch (err) {
    console.log(err)
  }
}

const registerAuthApi = Object.freeze({
  finishRegistration,
  checkRegistration,
  validateUsername,
})

export default registerAuthApi
