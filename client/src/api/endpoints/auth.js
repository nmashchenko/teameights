// * Modules 
import axios from 'axios';

// * Api
import api from "../../http";

// * API
import { API_URL } from '../../http';

// * Redux
import { userAuth } from '../../store/reducers/UserAuth';


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

// const checkRegistration = () => async(dispatch) => {
//   try {
//     dispatch(userAuth.actions.authUser())
//     const response = await axios.get(`${API_URL}/get-email`, {withCredentials: true})
//     dispatch(userAuth.actions.setUserEmail(response.data))
//   } catch(err) {
//     dispatch(userAuth.actions.authUserError(err.response?.data?.message))
//   }
// }

const authApi = Object.freeze({
  loginUser,
  checkAuth,
  registerUser,
  checkIsRegistered,
  // checkRegistration
})

export default authApi