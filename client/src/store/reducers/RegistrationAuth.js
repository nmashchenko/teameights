import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

    setIsFinishedAvatarLoading(state, action) {
      state.isFinishedAvatarLoading = action.payload
    },

    finishRegistrationError(state, action) {
      state.isLoading = false
      state.error = action.payload
      state.userData.isRegistered = false
    },
    startRegistration(state) {
      state.isLastStep = false
      state.step = 0
    },
  },
})

export const {
  setIsLastStep,
  setIsOptionalStep,
  setIsFinishedAvatarLoading,
  setIsFinishRegistrationStarted,
  setUserPersonalInfo,
  setActiveState,
  setStep,
  setStageOneCompleted,
  finishRegistration,
  finishRegistrationError,
  startRegistration,
} = registrationAuth.actions

export default registrationAuth.reducer
