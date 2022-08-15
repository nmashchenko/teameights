import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {
    email: '',
    userUsername: '',
    userRealName: '',
    userAge: '',
    userDescription: '',
    userConcentration: '',
    userCountry: '',
    userExperience: '',
    userLeader: false,
    userLinks: {},
    userProgrammingLanguages: [],
    userRole: 'Standard',
    isRegistered: false,
  },
  active: 'InitialPart',
  step: 0,
  isLoading: false,
  error: '',
}

export const registrationAuth = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    /**
     *
     * @param {Object} state - redux state that is being changed
     * @param {Object} action - passed parameters that should be changed
     *
     * The point of creating two setters is that if user logs in with google, he will be given only Full Name but username will be missing
     * However, if user sign-ups regular way, he will be given username in the beginning
     */
    setUserInitialDataWithName: (state, action) => {
      state.userData.email = action.payload.email
      state.userData.userRealName = action.payload.userRealName
      state.userData.isRegistered = action.payload.isRegistered
    },

    setUserInitialDataWithUsername: (state, action) => {
      state.userData.email = action.payload.email
      state.userData.userUsername = action.payload.username
      state.userData.isRegistered = action.payload.isRegistered
    },

    /**
     *
     * @param {Object} state - redux state that is being changed
     * @param {Object} action - passed parameters that should be changed
     *
     * Same story here, after getting initial data we need to set additional real name/username
     */
    setUserPersonalInfoWithName(state, action) {
      state.userData.userRealName = action.payload.name
      state.userData.userAge = action.payload.age
      state.userData.userCountry = action.payload.country
      state.userData.userDescription = action.payload.description
    },

    setUserPersonalInfoWithUsername(state, action) {
      state.userData.userUsername = action.payload.username
      state.userData.userAge = action.payload.age
      state.userData.userCountry = action.payload.country
      state.userData.userDescription = action.payload.description
    },

    setUserConcentration(state, action) {
      state.userData.userConcentration = action.payload
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

    setActiveState(state, action) {
      state.active = action.payload
    },

    setStep(state, action) {
      state.step = action.payload
    },

    finishRegistration(state) {
      state.isLoading = true
    },

    finishRegistrationSuccess(state) {
      state.isLoading = false
      state.error = ''
      state.userData.isRegistered = true
    },

    finishRegistrationError(state, action) {
      state.isLoading = false
      state.error = action.payload
      state.userData.isRegistered = false
    },
  },
})

export default registrationAuth.reducer
