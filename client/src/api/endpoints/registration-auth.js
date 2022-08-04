// * Modules
import axios from 'axios'

// * API
import api from '../../http'
import { API_URL } from '../../http'

// * Redux
import { registrationAuth } from '../../store/reducers/RegistrationAuth'

const checkRegistration = () => async (dispatch) => {
  try {
    dispatch(registrationAuth.actions.finishRegistration())
    const response = await axios.get(`${API_URL}/get-email`, { withCredentials: true })
    let { isRegistered, email } = response.data
    dispatch(registrationAuth.actions.setUserEmail(email))
    dispatch(registrationAuth.actions.setUserRegistration(isRegistered))
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
