import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  isRegistered: false,
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

  },
})

export default userAuth.reducer
