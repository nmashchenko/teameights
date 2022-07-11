// * Api
import api from "../../http";
import axios from 'axios';
import { API_URL } from '../../http';
import { userAuth } from '../../store/reducers/UserAuth';
import { registrationAuth } from '../../store/reducers/RegistrationAuth'


const loginUser = (email, password) => async(dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    const response = await api.post('/login', {email, password})
    localStorage.setItem('token', response.data.accessToken);
    dispatch(userAuth.actions.authUserSuccess(response.data))
  } catch (err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const checkAuth = () => async(dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
    localStorage.setItem('token', response.data.accessToken);
    dispatch(userAuth.actions.authUserSuccess(response.data))
  } catch(err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const registerUser = (username, email, password, repeatPassword) => async(dispatch) => {
  try{
    dispatch(userAuth.actions.authUser())
    const response = await api.post('/registration', {username, email, password, repeatPassword})
    localStorage.setItem('token', response.data.accessToken);
    dispatch(userAuth.actions.authUserSuccess(response.data))
  } catch(err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const checkIsRegistered = (email) => async(dispatch) => {
  try {
    dispatch(userAuth.actions.authUser())
    await api.post('/check-registration', {email})
    dispatch(userAuth.actions.authUserIsRegistered())
  } catch(err) {
    dispatch(userAuth.actions.authUserError(err.response?.data?.message))
  }
}

const checkRegistration = () => async(dispatch) => {
  try {
    dispatch(registrationAuth.actions.finishRegistration())
    const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
    localStorage.setItem('token', response.data.accessToken);
    dispatch(registrationAuth.actions.setUserEmail(response.data.user.email))
  } catch(err) {
    dispatch(registrationAuth.actions.finishRegistrationError(err.response?.data?.message))
  }
}

const finishRegistration = (userData) => async(dispatch) => {
  try{
    dispatch(registrationAuth.actions.finishRegistration())
    await api.post('/registration-checkout', userData)
    dispatch(registrationAuth.actions.finishRegistrationSuccess())
  } catch(err) {
    dispatch(registrationAuth.actions.finishRegistrationError(err.response?.data?.message))
  }
}

const authApi = Object.freeze({
  loginUser,
  checkAuth,
  registerUser,
  finishRegistration,
  checkRegistration,
  checkIsRegistered
})

export default authApi