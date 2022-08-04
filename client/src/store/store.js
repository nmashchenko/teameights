import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserAuth'
import registrationReducer from './reducers/RegistrationAuth'

const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}