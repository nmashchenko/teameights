// * Modules
import React, { useState, useEffect } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

// * Api
import authApi from '../../../api/endpoints/auth'

// * Redux
import { userAuth } from '../../../store/reducers/UserAuth'
import { useSelector, useDispatch } from 'react-redux'

// * Constants
import ROUTES from '../../../constants/routes'

// * Assets
import NavBar from '../../NavBar/NavBar'
import SnackBar from '../../SnackBar/SnackBar'
import CodingImage from '../../../assets/CodingImage'

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
  RightScreenContainer,
  ImageContainer,
  TextContainer,
  Text,
  SpannedLetter,
  SeparateLine,
} from './LoginForm.styles'
import {useLoginUser} from "../../../api/hooks/useLoginUser";

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error } = useSelector((state) => state.userReducer)

  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('ihMC21azx')
  const [inputEmail, setInputEmail] = useState('malarmihail@gmail.com')


  const mutation = useLoginUser()
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  // handle user manual log in
  const handleLogin = () => {
    mutation.mutate({email: inputEmail, password})
  }

  useEffect(() => {
    if (error && !isEqual(error, 'User is not authorized')) {
      setOpen(true)
    }
  }, [error])

  return (
    <>
      {/* <NavBar /> */}
      {error && <SnackBar open={open} handleClose={handleClose} error={error} />}
      <LoginContainer>
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
        <SeparateLine />
        <RightScreenContainer>
          <ImageContainer>
            <CodingImage />
            <TextContainer>
              <Text>Welcome back!</Text>
              <Text>
                Are you ready to find your Team<SpannedLetter>8</SpannedLetter>s?
              </Text>
            </TextContainer>
          </ImageContainer>
        </RightScreenContainer>
      </LoginContainer>
    </>
  )
}

export default LoginForm
