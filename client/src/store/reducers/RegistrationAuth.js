import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {
    name: '',
    age: '',
    concentration: '',
    country: '',
    experience: '',
    leader: false,
    links: [],
    programmingLanguages: [],
  },
  active: 'InitialPart',
  progress: '0'
}

export const registrationAuth = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userData.name = action.payload
    },

    setUserAge(state, action) {
      state.userData.age = action.payload
    },

    setUserConcentration(state, action) {
      state.userData.concentration = action.payload
    },

    setUserCountry(state, action) {
      state.userData.country = action.payload
    },

    setUserExperience(state, action) {
      state.userData.experience = action.payload
    },

    setUserLeader(state, action) {
      state.userData.leader = action.payload
    },

    setUserLinks(state, action) {
      state.userData.links = action.payload
    },

    setUserProgrammingLanguages(state, action) {
      state.userData.programmingLanguages = action.payload
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