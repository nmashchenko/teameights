import { createSlice } from '@reduxjs/toolkit'

interface RegistrationAuth {
  step: number
  isLastStep: boolean
  isFinishRegistrationStarted: boolean
  isOptionalStep: boolean
  isLoading: boolean
  isFinishedAvatarLoading: boolean
  error: string
  active: $TSFIXME
  userData: $TSFIXME
}

const initialState: RegistrationAuth = {
  step: 1,
  isLastStep: false,
  isFinishRegistrationStarted: false,
  isOptionalStep: false,
  isLoading: false,
  isFinishedAvatarLoading: false,
  error: '',
  active: null,
  userData: null,
}

export const registrationAuth = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setIsFinishRegistrationStarted: (state, action) => {
      state.isFinishRegistrationStarted = action.payload
    },

    setActiveState: (state, action) => {
      state.active = action.payload
    },

    setStep: (state, action) => {
      state.step = action.payload
    },

    setIsLastStep: (state, action) => {
      state.isLastStep = action.payload
    },

    setIsOptionalStep: (state, action) => {
      state.isOptionalStep = action.payload
    },

    setIsFinishedAvatarLoading: (state, action) => {
      state.isFinishedAvatarLoading = action.payload
    },

    finishRegistrationError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
      state.userData.isRegistered = false
    },
    startRegistration: (state) => {
      state.isLastStep = false
      state.step = 1
    },
  },
})

export const {
  setActiveState,
  setIsFinishRegistrationStarted,
  finishRegistrationError,
  setIsFinishedAvatarLoading,
  setIsLastStep,
  setIsOptionalStep,
  setStep,
  startRegistration,
} = registrationAuth.actions

export default registrationAuth.reducer
