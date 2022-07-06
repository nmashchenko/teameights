import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SiteLogo from "../../../assets/SiteLogo";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  NavBar,
  LoginContainer,
  LoginTextContainer,
  LoginInputContainer,
  LoginBox,
  LoginText,
  LoginInput,
  LoginButton,
  BottomBox,
  LoginLink,
  PasswordContainer,
  ShowPass,
} from './LoginForm.styles'

function LoginForm() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <NavBar>
            <SiteLogo />
          </NavBar>
        </AppBar>
      </Box>
      <form>
        <LoginContainer>
          <LoginBox>
            <LoginTextContainer>
              <LoginText fontSize='20px'>Welcome back 💫</LoginText>
            </LoginTextContainer>
            <LoginInputContainer>
              <LoginInput 
              placeholder="Email" 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordContainer>
                <LoginInput 
                  placeholder="Password" 
                  type={showPassword ? 'text':'password'} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </ShowPass>
              </PasswordContainer>
              <LoginButton>Login</LoginButton>
            </LoginInputContainer>
            <BottomBox>
              <LoginLink href='/' fontSize='12px' fontWeight='700'>Forgot password?</LoginLink>
              <LoginLink href='/' fontSize='12px' fontWeight='700'>Sign up</LoginLink>
            </BottomBox>
          </LoginBox>
        </LoginContainer>
      </form>
    </div>
  )
}

export default LoginForm