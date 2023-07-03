import { GoogleOAuthProvider } from '@react-oauth/google'

export const withGoogle = (component) => () =>
  (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_OAUTH_TOKEN}>
      {component()}
    </GoogleOAuthProvider>
  )
