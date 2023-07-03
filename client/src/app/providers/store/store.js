import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer'],
}

export function makeStore() {
  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  setupListeners(store.dispatch)

  return store
}

export const appStore = makeStore()
export const persistedStore = persistStore(appStore)

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof appStore.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof appStore.dispatch
