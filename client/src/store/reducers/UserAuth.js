import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  isRegistered: false,
  isConnected: false,
  notifications: [],
  error: '',
}

export const userAuth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUserSuccess(state) {
      state.error = ''
      state.isAuth = true
    },

    authUserLogout(state) {
      state.error = ''
      state.isAuth = false
    },

    authUserError(state, action) {
      state.error = action.payload
      state.isAuth = false
    },

    authClearError(state) {
      state.error = ''
    },

    setUserNotifications(state, action) {
      console.log(action.payload)
      state.notifications = action.payload
      state.isConnected = true
    },
  },
})

export default userAuth.reducer
