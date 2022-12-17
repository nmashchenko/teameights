// * Modules
import React, { useState, useEffect } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import isEqual from 'lodash/isEqual'

// * Api

// * Redux
import { useSelector } from 'react-redux'

// * Constants

// * Assets
import SnackBar from '../../SnackBar/SnackBar'

// * Helpers
import SocialLoginRegistration from '../SocialLoginRegistration/SocialLoginRegistration'

import {
  LoginContainer,
  LeftScreenContainer,
  LoginSignUpContainer,
  LoginSignUpLinks,
  LoginLink,
  EmailPasswordContainer,
  LoginInput,
  PasswordContainer,
  ShowPass,
  LoginButton,
  OrContainer,
  OrLine,
  AlternativeLogin,
  Text,
} from './LoginForm.styles'
import {useLoginUser} from "../../../api/hooks/useLoginUser";
import Loader from "../../Loader/Loader";

function LoginForm() {

  const { error } = useSelector((state) => state.userReducer)

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('12345678')
  const [inputEmail, setInputEmail] = useState('malarmihail@gmail.com')


  const {mutate: loginUser, isLoading: isLoggingUserIn} = useLoginUser('login')

  // handle user manual log in
  const handleLogin = () => {
    loginUser({email: inputEmail, password})
  }


  if(isLoggingUserIn){
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
