// * Modules
import React, { useState, useEffect } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

// * Api

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { userAuth } from '../../../store/reducers/UserAuth'

// * Constants
import ROUTES from '../../../constants/routes'

// * Assets
import SnackBar from '../../SnackBar/SnackBar'
import Backdrop from '../../Backdrop/Backdrop'

// * Helpers
import SocialLoginRegistration from '../SocialLoginRegistration/SocialLoginRegistration'

// * Styles
import {
  LeftScreenContainer,
  LoginSignUpContainer,
  LoginSignUpLinks,
  RegistrationLink,
  UsernameEmailPasswordContainer,
  RegistrationInput,
  PasswordContainer,
  ShowPass,
  RegistrationButton,
  OrContainer,
  OrLine,
  AlternativeRegistration,
  Text,
} from './RegistrationForm.styles'
import {useCheckAuth} from "../../../api/hooks/useCheckAuth";
import {useRegister} from "../../../api/hooks/useRegister";
import Loader from "../../Loader/Loader";

function RegistrationForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, error, isLoading } = useSelector((state) => state.userReducer)

  const {data: userData} = useCheckAuth()
  const user = userData?.data
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('12345678')
  const [confirmPassword, setConfirmPassword] = useState('12345678')
  const [username, setUsername] = useState('www')
  const [email, setEmail] = useState('')

  const {mutate: registerUser, isLoading: isUserRegistrationLoading} = useRegister()

  const handleRegistration = () => {
    registerUser({username, email, password, repeatPassword: confirmPassword})
  }


  // useEffect(() => {
  //   if (isAuth && !user.isActivated) {
  //     navigate(ROUTES.confirmEmail, { replace: true })
  //   } else if (isAuth && !user.isRegistered) {
  //     navigate(ROUTES.finishRegistration, { replace: true })
  //   } else if (isAuth && user.isRegistered && user.isActivated) {
  //     navigate("/", { replace: true })
  //   }
  // }, [isAuth, navigate])



  if(isUserRegistrationLoading) {
    return <Loader />
  }
  return (
    <>
      <Backdrop isLoading={isLoading} />
        <LeftScreenContainer>
          <LoginSignUpContainer>
            <LoginSignUpLinks>
              <RegistrationLink to="/auth/login" color="white" border="none" marginbot="0">
                Login
              </RegistrationLink>
              <RegistrationLink to="/auth/registration">Sign-Up</RegistrationLink>
            </LoginSignUpLinks>
          </LoginSignUpContainer>
          <UsernameEmailPasswordContainer>
            <RegistrationInput
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="0 0 30px 0"
            />
            <RegistrationInput
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="0 0 30px 0"
            />
            <PasswordContainer>
              <RegistrationInput
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="0 0 30px 0"
                paddingright="45px"
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <PasswordContainer>
              <RegistrationInput
                placeholder="Repeat Password"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                paddingright="45px"
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <RegistrationButton onClick={handleRegistration}>Register</RegistrationButton>
            <OrContainer>
              <OrLine />
              <Text fontSize="14px" margin="0 10px 0 10px" fontWeight="500">
                OR LOGIN WITH
              </Text>
              <OrLine />
            </OrContainer>
            <AlternativeRegistration>
              <SocialLoginRegistration />
            </AlternativeRegistration>
          </UsernameEmailPasswordContainer>
        </LeftScreenContainer>
    </>
  )
}

export default RegistrationForm
