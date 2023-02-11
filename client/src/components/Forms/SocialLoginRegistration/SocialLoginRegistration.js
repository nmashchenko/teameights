// * Modules
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

// * Redux
// * Api
import { useLoginUser } from '../../../api/hooks/auth/useLoginUser'
import Loader from '../../../shared/components/Loader/Loader'

const SocialLoginRegistration = () => {
  const { mutate: socialLoginRegisterUser, isLoading: isLoggingInUser } = useLoginUser(
    'google',
  )
  const createOrGetUser = async (response) => {
    const token = response.credential;

    socialLoginRegisterUser({ token })
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
