import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  statusDone: false,
  error: '',
}

export const resetPassword = createSlice({
  name: 'reset',
  initialState,
  reducers: {
    resetPassword(state) {
      state.isLoading = true;
    },

    resetPasswordSuccess(state) {
      state.isLoading = false;
      state.error = '';
      state.statusDone = true;
    },

    resetPasswordError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default resetPassword.reducer;