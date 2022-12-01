// * Modules
import axios from 'axios'

// * Api
import api from '../../http'

// * API
import { API_URL } from '../../http'

// * Redux
import { userAuth } from '../../store/reducers/UserAuth'

const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    const response = await api.post('/login', { email, password })
    localStorage.setItem('token', response.data.accessToken)
    dispatch(userAuth.actions.authUserSuccess(response.data.user))
  } catch (err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const socialLoginRegistration = (username, email, picture, sub) => async (dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    const response = await api.post('/social-login-registration', { username, email, picture, sub })
    localStorage.setItem('token', response.data.accessToken)
    console.log(response.data.user)
    dispatch(userAuth.actions.authUserSuccess(response.data.user))
  } catch (err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const checkAuth = () => async (dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    const response = await axios.get(`${API_URL}/get-user-object`, { withCredentials: true })
    console.log('we got this data:')
    console.log(response.data)
    dispatch(userAuth.actions.authUserSuccess(response.data))
  } catch (err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const registerUser = (username, email, password, repeatPassword) => async (dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    const response = await api.post('/registration', { username, email, password, repeatPassword })
    localStorage.setItem('token', response.data.accessToken)
    dispatch(userAuth.actions.authUserSuccess(response.data.user))
  } catch (err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const logoutUser = () => async (dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    await api.post('/logout')
    localStorage.removeItem('token')
    dispatch(userAuth.actions.authUserLogout())
  } catch (err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const authApi = Object.freeze({
  loginUser,
  socialLoginRegistration,
  checkAuth,
  registerUser,
  logoutUser,
})

export default authApi
