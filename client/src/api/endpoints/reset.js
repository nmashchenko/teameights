// * API
import http from '../../http'
import { errorToaster } from '../../shared/components/Toasters/Error.toaster'

const { api } = http

const getRegistrationEmail = async (email) => {
  try {
    await api.get(`/auth/reset-password/${email}`)
  } catch (err) {
    errorToaster(err.response.data.message)

    return err.response.data.message
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
