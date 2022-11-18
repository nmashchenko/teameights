// * Modules
import jwt_decode from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google'

// * Redux
import { useDispatch } from 'react-redux'

// * Api
import authApi from '../../../api/endpoints/auth'

const SocialLoginRegistration = () => {
  const dispatch = useDispatch()

  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential)
    console.log(decoded)
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
