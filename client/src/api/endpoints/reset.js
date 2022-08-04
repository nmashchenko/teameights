// * API
import api from '../../http'

const getRegistrationEmail = async (email)  => {
  try {
    await api.post('/reset-password', { email })
  } catch (err) {
    console.log(err)
  }
}

const updatePassword = async (id, token, password, repeatPassword) => {
  try {
    await api.post(`/reset-password/${id}/${token}`, { id, token, password, repeatPassword })
  } catch (err) {
    return err.response.data.message
  }
}

const resetApi = Object.freeze({
  getRegistrationEmail,
  updatePassword,
})

export default resetApi
