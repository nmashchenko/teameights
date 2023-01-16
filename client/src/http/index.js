// * Modules
import axios from 'axios'

// * API url is set based on current DEV_TYPE var
const API_URL =
  process.env.REACT_APP_DEV_TYPE === 'development'
    ? 'http://localhost:5000/api'
    : 'https://teameights-server.herokuapp.com/api'

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })

        localStorage.setItem('token', response.data.accessToken)

        return api.request(originalRequest)
      } catch (err) {
        console.log('Not authorized')
        localStorage.removeItem('token')
      }
    }
    throw error
  },
)

const http = Object.freeze({
  API_URL,
  api,
})

export default http
