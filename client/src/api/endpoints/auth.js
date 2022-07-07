// * Api
import api from "../../http";
import axios from 'axios';
import { API_URL } from '../../http';
import { userAuth } from "../../store/reducers/UserAuth";


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

const authApi = Object.freeze({
  loginUser,
  checkAuth,
})

export default authApi