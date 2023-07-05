// * Routes
// * Modules

import { Routing } from '../routes/routes'

import { withProviders } from './providers'

function App() {
  return (
    <>
      <Routing />
    </>
  )
}

export default withProviders(App)
