// * Modules
// * Redux
import { useDispatch } from 'react-redux'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

// * Api
import authApi from '../../../api/endpoints/auth'

const SocialLoginRegistration = () => {
  const dispatch = useDispatch()

  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential)
    const { picture, email, sub } = decoded
    const username = email.split('@')[0]

    dispatch(authApi.socialLoginRegistration(username, email, picture, sub))
  }

  return (
    <GoogleLogin
      onSuccess={(response) => createOrGetUser(response)}
      onError={() => console.log('Error')}
    />
  )
}

export default SocialLoginRegistration
