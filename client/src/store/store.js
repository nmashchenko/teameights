import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserAuth'
import registrationReducer from './reducers/RegistrationAuth'
import sharedReducer from './reducers/Shared'
const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
  sharedReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}