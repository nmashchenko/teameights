import { combineReducers, configureStore } from '@reduxjs/toolkit'

import registrationReducer from './reducers/RegistrationAuth'
import sharedReducer from './reducers/Shared'
import userReducer from './reducers/UserAuth'

const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
  sharedReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
