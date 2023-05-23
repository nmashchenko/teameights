// * Modules
import React, { useState } from 'react'
// * Redux
import { useSelector } from 'react-redux'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { useRegister } from '../../../api/hooks/auth/useRegister'
import Loader from '../../../shared/components/Loader/Loader'
// * Helpers
import SocialLoginRegistration from '../SocialLoginRegistrationForm/SocialLoginRegistrationForm'

// * Styles
import {
  AlternativeRegistration,
  LeftScreenContainer,
  LoginSignUpContainer,
  LoginSignUpLinks,
  OrContainer,
  OrLine,
  PasswordContainer,
  RegistrationButton,
  RegistrationInput,
  RegistrationLink,
  ShowPass,
  Text,
  UsernameEmailPasswordContainer,
} from './RegistrationForm.styles'

function RegistrationForm() {
  const { isLoading } = useSelector((state) => state.userReducer)

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const { mutate: registerUser, isLoading: isUserRegistrationLoading } = useRegister()

  const handleRegistration = () => {
    registerUser({ email, password, repeatPassword: confirmPassword })
  }

  if (isUserRegistrationLoading) {
    return <Loader />
  }

  return (
    <>
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
