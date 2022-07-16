import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserAuth'
import registrationReducer from './reducers/RegistrationAuth'
import resetPasswordReducer from './reducers/Reset'

const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
  resetPasswordReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}