// * Modules
import React, { useEffect, useState } from 'react'
// * Api
// * Redux
import { useSelector } from 'react-redux'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import isEqual from 'lodash/isEqual'

import { useLoginUser } from '../../../api/hooks/auth/useLoginUser'
import Loader from '../../../shared/components/Loader/Loader'
// * Constants
// * Assets
import SnackBar from '../../SnackBar/SnackBar'
// * Helpers
import SocialLoginRegistration from '../SocialLoginRegistration/SocialLoginRegistration'

import {
  AlternativeLogin,
  EmailPasswordContainer,
  LeftScreenContainer,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginLink,
  LoginSignUpContainer,
  LoginSignUpLinks,
  OrContainer,
  OrLine,
  PasswordContainer,
  ShowPass,
  Text,
} from './LoginForm.styles'

function LoginForm() {
  const { error } = useSelector((state) => state.userReducer)

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [inputEmail, setInputEmail] = useState('')

  const { mutate: loginUser, isLoading: isLoggingUserIn } = useLoginUser('login')

  // handle user manual log in
  const handleLogin = () => {
    loginUser({ email: inputEmail, password })
  }

  if (isLoggingUserIn) {
    return <Loader />
  }

  return (
    <>
      <LeftScreenContainer>
        <LoginSignUpContainer>
          <LoginSignUpLinks>
            <LoginLink to="/auth/login">Login</LoginLink>
            <LoginLink to="/auth/registration" color="white" border="none" marginbot="0">
              Sign-Up
            </LoginLink>
          </LoginSignUpLinks>
        </LoginSignUpContainer>
        <EmailPasswordContainer>
          <LoginInput
            placeholder="Email"
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            margin="0 0 30px 0"
          />
          <PasswordContainer>
            <LoginInput
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              paddingright="45px"
            />
            <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </ShowPass>
          </PasswordContainer>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <LoginLink
            color="white"
            border="none"
            marginbot="0"
            margintop="20px"
            to="/auth/password-recover"
            fontSize="14px"
            fontWeight="600"
          >
            Forgot Password?
          </LoginLink>
          <OrContainer>
            <OrLine />
            <Text fontSize="14px" margin="0 10px 0 10px" fontWeight="500">
              OR
            </Text>
            <OrLine />
          </OrContainer>
          <AlternativeLogin>
            <SocialLoginRegistration />
          </AlternativeLogin>
        </EmailPasswordContainer>
      </LeftScreenContainer>
    </>
  )
}

export default LoginForm
