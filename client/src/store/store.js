import { combineReducers, configureStore } from '@reduxjs/toolkit'

import registrationReducer from './reducers/RegistrationAuth'
import sharedReducer from './reducers/Shared'
import teamsFilters from './reducers/TeamsFiltersSlice'
import userReducer from './reducers/UserAuth'
import usersFilters from './reducers/UsersFiltersSlice'

const rootReducer = combineReducers({
  userReducer,
  registrationReducer,
  sharedReducer,
  usersFilters,
  teamsFilters,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
