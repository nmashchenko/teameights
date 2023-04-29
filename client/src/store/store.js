import { combineReducers, configureStore } from '@reduxjs/toolkit'

import registrationReducer from './reducers/RegistrationAuth'
import sharedReducer from './reducers/Shared'
import userReducer from './reducers/UserAuth'
import usersFilters from './reducers/UsersFiltersSlice'

const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
  sharedReducer,
  usersFilters,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
