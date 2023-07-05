import { combineReducers } from '@reduxjs/toolkit'
import { registrationAuth } from 'app/providers/store/reducers/RegistrationAuth'
import { sharedSlice } from './reducers/Shared'
import { teamsFiltersSlice } from './reducers/TeamsFiltersSlice'
import { userAuth } from './reducers/UserAuth'
import { usersFiltersSlice } from './reducers/UsersFiltersSlice'

export const rootReducer = combineReducers({
	[userAuth.name]: userAuth.reducer,
	[registrationAuth.name]: registrationAuth.reducer,
	[sharedSlice.name]: sharedSlice.reducer,
	[teamsFiltersSlice.name]: teamsFiltersSlice.reducer,
	[usersFiltersSlice.name]: usersFiltersSlice.reducer
})


