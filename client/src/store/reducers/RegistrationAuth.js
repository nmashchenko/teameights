import { createSlice } from '@reduxjs/toolkit'
import finishRegistrationValidation from "../../schemas";

const initialState = {
  userData: {
    email: '',
    userUsername: '',
    userRealName: '',
    userPhoto: '',
    userAge: '',
    userDescription: '',
    userConcentration: '',
    userCountry: '',
    userExperience: '',
    userLeader: false,
    userLinks: {},
    userProgrammingLanguages: [],
    userFrameworks: [],
    userRole: 'Standard',
    userUniversity: '',
    userMajor: '',
    userGraduationDate: '',
    isRegistered: false,
  },

  completedStates: {
    stageOneComplete: false,
    stageTwoComplete: false,
    stageThreeComplete: false,
    stageFourComplete: false,
    stageFiveComplete: false,
  },
  active: 'InitialPart',
  step: 0,
  isLastStep: false,
  isFinishRegistrationStarted: false,
  isOptionalStep: false,
  isLoading: false,
  isFinishedAvatarLoading: false,
  error: '',
}

export const registrationAuth = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUserInitialData: (state, action) => {
      state.userData.email = action.payload.email
      state.userData.userUsername = action.payload.userUsername
      state.userData.isRegistered = action.payload.isRegistered
    },

    setUserPersonalInfo(state, action) {
      state.userData.userRealName = action.payload.name
      state.userData.userUsername = action.payload.username
      state.userData.userAge = action.payload.age
      state.userData.userCountry = action.payload.country
      state.userData.userDescription = action.payload.description
    },

    setUserConcentration(state, action) {
      state.userData.userProgrammingLanguages = action.payload.programmingLanguages
      state.userData.userConcentration = action.payload.concentration
      state.userData.userFrameworks = action.payload.frameworks
    },

    setUserExperience(state, action) {
      state.userData.userExperience = action.payload.experience
      state.userData.userLeader = action.payload.leader
    },

    setUniversityInfo(state, action) {
      state.userData.userUniversity = action.payload.university
      state.userData.userMajor = action.payload.major
      state.userData.userGraduationDate = action.payload.graduationDate
    },

    setUserLinks(state, action) {
      state.userData.userLinks = action.payload
    },

    setIsFinishRegistrationStarted(state, action) {
      state.isFinishRegistrationStarted = action.payload
    },

    setActiveState(state, action) {
      state.active = action.payload
    },

    setStep(state, action) {
      state.step = action.payload
    },

    setIsLastStep(state, action) {
      state.isLastStep = action.payload
    },

    setIsOptionalStep(state, action) {
      state.isOptionalStep = action.payload
    },

    setStageOneCompleted(state, action) {
      state.completedStates.stageOneComplete = true
    },

    setStageTwoCompleted(state, action) {
      state.completedStates.stageTwoComplete = true
    },

    setStageThreeCompleted(state, action) {
      state.completedStates.stageThreeComplete = true
    },

    setStageFourCompleted(state, action) {
      state.completedStates.stageFourComplete = true
    },

    setStageFiveCompleted(state, action) {
      state.completedStates.stageFiveComplete = true
    },

    finishRegistration(state) {
      state.isLoading = true
    },
    setIsFinishedAvatarLoading(state, action) {
      state.isFinishedAvatarLoading = action.payload
    },
    finishRegistrationSuccess(state, action) {
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

export const { setUserInitialData, setIsLastStep, setIsOptionalStep, setIsFinishedAvatarLoading,  setIsFinishRegistrationStarted,  setUserPersonalInfo, setUserConcentration, setUserExperience, setUniversityInfo, setUserLinks, setActiveState, setStep, setStageOneCompleted, setStageTwoCompleted, setStageThreeCompleted, setStageFourCompleted, setStageFiveCompleted, finishRegistration, finishRegistrationSuccess, finishRegistrationError } = registrationAuth.actions;


export default registrationAuth.reducer
