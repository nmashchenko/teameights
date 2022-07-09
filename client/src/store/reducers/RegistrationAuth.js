import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {},
  active: 'InitialPart',
  progress: '0'
}

export const registrationAuth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSetData(state, action) {
      state.userData = action.payload;
    },

    setActiveState(state, action) {
      state.active = action.payload;
    },

    setProgress(state, action) {
      state.progress = action.payload;
    }
  }
})

export default registrationAuth.reducer;