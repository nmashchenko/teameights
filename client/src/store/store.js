import { combineReducers, configureStore } from '@reduxjs/toolkit'

import registrationReducer from './reducers/RegistrationAuth'
import userReducer from './reducers/UserAuth'

const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
