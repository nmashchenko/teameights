// * Modules
import React, { useState, useEffect } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

// * Api
import authApi from '../../../api/endpoints/auth'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { userAuth } from '../../../store/reducers/UserAuth'

// * Constants
import ROUTES from '../../../constants/routes'

// * Assets
import NavBar from '../../NavBar/NavBar'
import SnackBar from '../../SnackBar/SnackBar'
import CodingImage from '../../../assets/CodingImage'
import Backdrop from '../../Backdrop/Backdrop'

// * Helpers
import SocialLoginRegistration from '../SocialLoginRegistration/SocialLoginRegistration'

// * Styles
import {
  RegistrationContainer,
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
  RightScreenContainer,
  ImageContainer,
  TextContainer,
  Text,
  SpannedLetter,
  SeparateLine,
} from './RegistrationForm.styles'

function RegistrationForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isAuth, error, isLoading } = useSelector((state) => state.userReducer)

  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleRegistration = () => {
    // clear previous error before making new request
    dispatch(userAuth.actions.authClearError())
    // make a request to register user
    dispatch(authApi.registerUser(username, email, password, confirmPassword))
  }

  useEffect(() => {
    if (error && !isEqual(error, 'User is not authorized')) {
      setOpen(true)
    }
  }, [error])

  useEffect(() => {
    if (isAuth && !user.user.isActivated) {
      navigate(ROUTES.confirmEmail, { replace: true })
    } else if (isAuth && !user.user.isRegistered) {
      navigate(ROUTES.finishRegistration, { replace: true })
    } else if (isAuth && user.user.isRegistered && user.user.isActivated) {
      navigate(ROUTES.temporary, { replace: true })
    }
  }, [isAuth, navigate])

  useEffect(() => {
    // clear previous error before making new request
    dispatch(userAuth.actions.authClearError())
  }, [])

  return (
    <>
      {error && <SnackBar open={open} handleClose={handleClose} error={error} />}
      <Backdrop isLoading={isLoading} />
      <RegistrationContainer>
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
        <SeparateLine />
        <RightScreenContainer>
          <ImageContainer>
            <CodingImage />
            <TextContainer>
              <Text>
                start your coding journey with Team<SpannedLetter>8</SpannedLetter>s!
              </Text>
            </TextContainer>
          </ImageContainer>
        </RightScreenContainer>
      </RegistrationContainer>
    </>
  )
}

export default RegistrationForm
