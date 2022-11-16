// * Modules
import axios from 'axios'
import { isEqual } from 'lodash'

// * API
import api from '../../http'
import { API_URL } from '../../http'

// * Redux
import { registrationAuth } from '../../store/reducers/RegistrationAuth'

const checkRegistration = () => async (dispatch) => {
  try {
    dispatch(registrationAuth.actions.finishRegistration())
    const response = await axios.get(`${API_URL}/get-user-object`, { withCredentials: true })
    let { isRegistered, email, userRealName, userUsername } = response.data
    if (isEqual(response.data.userUsername, 'temporary')) {
      dispatch(
        registrationAuth.actions.setUserInitialDataWithName({ email, isRegistered, userRealName }),
      )
    } else {
      dispatch(
        registrationAuth.actions.setUserInitialDataWithUsername({
          email,
          isRegistered,
          userUsername,
        }),
      )
    }
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

const validateUsername = async (username) => {
  try {
    const response = await api.get('/check-username', { params: { username } })
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
