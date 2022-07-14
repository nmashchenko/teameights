// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// * Assets
import SiteLogo from "../../../assets/SiteLogo";

import {
  NavBar,
  Container,
  NewPasswordContainer,
  NewPasswordBox,
  TextContainer,
  TitleText,
  SubTitleText,
  NewPasswordInput,
  NewPasswordButton,
  InputContainer,
  PasswordContainer,
  ShowPass,
} from './NewPasswords.styles'

import ROUTES from "../../../constants/routes";

function NewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <NavBar>
          <SiteLogo />
        </NavBar>
      </AppBar>
    </Box>
    <NewPasswordContainer>
      <NewPasswordBox>
        <TextContainer>
          <TitleText margin='0 0 24px 0'>Recover Password</TitleText>
        </TextContainer>
        <TextContainer>
          <SubTitleText>Create new, <strong> strong </strong> password that you don't use for the other websites</SubTitleText>
        </TextContainer>
        <InputContainer>
          <PasswordContainer>
              <NewPasswordInput
                placeholder="PASSWORD"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <PasswordContainer>
              <NewPasswordInput
                placeholder="REPEAT PASSWORD"
                type={showPassword ? "text" : "password"}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <NewPasswordButton onClick={() => navigate(ROUTES.passwordRecoverConfirm, { replace: true })}>RESET PASSWORD</NewPasswordButton>
        </InputContainer>
      </NewPasswordBox>
    </NewPasswordContainer>
  </Container>
  )
}

export default NewPassword