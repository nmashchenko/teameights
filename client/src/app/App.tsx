

import { Routing } from 'shared/config/routes'
import { withProviders } from './providers'

function App() {
  return (
    <>
      <Routing />
    </>
  )
}

export default withProviders(App)
