// * Routes
// * Modules
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { useRoutes } from './routes/routes'

function App() {
  const routes = useRoutes()

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_OAUTH_TOKEN}>
        <Toaster />
        <Router>{routes}</Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
