// * Modules
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

// * Redux
// * Api
import { useLoginUser } from '../../../api/hooks/useLoginUser'
import Loader from '../../Loader/Loader'

const SocialLoginRegistration = () => {
  const { mutate: socialLoginRegisterUser, isLoading: isLoggingInUser } = useLoginUser(
    'social-login-registration',
  )
  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential)
    const { picture, email, sub } = decoded
    const username = email.split('@')[0]

    socialLoginRegisterUser({ username, email, picture, sub })
  }

  if (isLoggingInUser) {
    return <Loader />
  }

  return (
    <GoogleLogin
      onSuccess={(response) => createOrGetUser(response)}
      onError={() => console.log('Error')}
    />
  )
}

export default SocialLoginRegistration
