import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserAuth'

const rootReducer = combineReducers({
  userReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}