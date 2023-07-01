import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  isRegistered: false,
  isConnected: false,
  notifications: [],
  userId: '',
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
      state.isConnected = false
    },

    authUserError(state, action) {
      state.error = action.payload
      state.isAuth = false
    },

    authClearError(state) {
      state.error = ''
    },

    setUserNotifications(state, action) {
      state.notifications = action.payload
      state.isConnected = true
    },

    setUserId(state, action) {
      state.userId = action.payload
    },
  },
})

export default userAuth.reducer
