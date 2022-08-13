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
    const response = await axios.get(`${API_URL}/get-email`, { withCredentials: true })
    let { isRegistered, email, userRealName, username } = response.data
    if (isEqual(response.data.username, 'temporary')) {
      dispatch(registrationAuth.actions.setUserEmail(email))
      dispatch(registrationAuth.actions.setUserRegistration(isRegistered))
      dispatch(registrationAuth.actions.setUserRealName(userRealName))
    } else {
      dispatch(registrationAuth.actions.setUserEmail(email))
      dispatch(registrationAuth.actions.setUserRegistration(isRegistered))
      dispatch(registrationAuth.actions.setUserUsername(username))
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

const registerAuthApi = Object.freeze({
  finishRegistration,
  checkRegistration,
})

export default registerAuthApi
