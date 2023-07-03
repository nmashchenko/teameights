import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { UseLoadSocket } from '../../shared/api/hooks/socket/useLoadSocket'

import { appStore, persistedStore } from './store/store'

console.log(appStore)
export const withStore = (component) => () =>
  (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <UseLoadSocket />
        {component()}
      </PersistGate>
    </ReduxProvider>
  )
