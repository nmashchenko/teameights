import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  isRegistered: false,
  error: '',
}

export const userAuth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser(state) {
      state.isLoading = true;
    },

    authUserSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
      state.isAuth = true;
    },

    authUserLogout(state) {
      state.isLoading = false;
      state.error = '';
      state.isAuth = false;
      state.user = {}
    },

    authUserIsRegistered(state, action) {
      state.isLoading = false;
      state.error = '';
      state.isRegistered = action.payload;
    },

    authUserError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuth = false;
    },
  }
})

export default userAuth.reducer;