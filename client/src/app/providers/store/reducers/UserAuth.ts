import { createSlice } from '@reduxjs/toolkit'

interface UserAuth {
  isAuth: boolean,
  isRegistered: boolean,
  isConnected: boolean,
  notifications: any,
  userId: string,
  error: string,
}

const initialState: UserAuth = {
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
