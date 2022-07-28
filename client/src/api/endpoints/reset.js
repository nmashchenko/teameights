// * API
import api from '../../http'

// * Redux
import { resetPassword } from '../../store/reducers/Reset'

const getRegistrationEmail = (email) => async (dispatch) => {
  try {
    dispatch(resetPassword.actions.resetPassword)
    await api.post('/reset-password', { email })
    dispatch(resetPassword.actions.resetPasswordSuccess())
  } catch (err) {
    console.log(err)
    dispatch(resetPassword.actions.resetPasswordError())
  }
}

const updatePassword = (id, token, password, repeatPassword) => async (dispatch) => {
  try {
    dispatch(resetPassword.actions.resetPassword)
    await api.post(`/reset-password/${id}/${token}`, { id, token, password, repeatPassword })
    dispatch(resetPassword.actions.resetPasswordSuccess())
  } catch (err) {
    console.log(err)
    dispatch(resetPassword.actions.resetPasswordError(err.response?.data?.message))
  }
}

const resetApi = Object.freeze({
  getRegistrationEmail,
  updatePassword,
})

export default resetApi
