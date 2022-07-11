import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {
    email: '',
    userRealName: '',
    userAge: '',
    userConcentration: '',
    userCountry: '',
    userExperience: '',
    userLeader: false,
    userLinks: {},
    userProgrammingLanguages: [],
    userRole: 'Standard',
    isRegistered: true,
  },
  active: 'InitialPart',
  progress: '0',
  isLoading: false,
  error: '',
}

export const registrationAuth = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userData.userRealName = action.payload
    },

    setUserAge(state, action) {
      state.userData.userAge = action.payload
    },

    setUserConcentration(state, action) {
      state.userData.userConcentration = action.payload
    },

    setUserCountry(state, action) {
      state.userData.userCountry = action.payload
    },

    setUserExperience(state, action) {
      state.userData.userExperience = action.payload
    },

    setUserLeader(state, action) {
      state.userData.userLeader = action.payload
    },

    setUserLinks(state, action) {
      state.userData.userLinks = action.payload
    },

    setUserProgrammingLanguages(state, action) {
      state.userData.userProgrammingLanguages = action.payload
    },

    setUserEmail(state, action) {
      state.userData.email = action.payload
    },

    setActiveState(state, action) {
      state.active = action.payload;
    },

    setProgress(state, action) {
      state.progress = action.payload;
    },

    finishRegistration(state) {
      state.isLoading = true;
    },

    finishRegistrationSuccess(state) {
      state.isLoading = false;
      state.error = '';
    },

    finishRegistrationError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default registrationAuth.reducer;