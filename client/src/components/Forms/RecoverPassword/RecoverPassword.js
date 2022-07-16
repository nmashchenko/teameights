// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// * Assets
import SiteLogo from "../../../assets/SiteLogo";
import ArrowLeft from "../../../assets/Arrows/ArrowLeft"

// * Api
import resetPassword from "../../../api/endpoints/reset";

// * Redux
import { useDispatch } from "react-redux";

import {
  NavBar,
  Container,
  RecoverContainer,
  RecoverBox,
  TextContainer,
  TitleText,
  SubTitleText,
  RecoverInput,
  RecoverButton,
  ButtonContainer,
  BackButton,
} from './RecoverPassword.styles'
import ROUTES from "../../../constants/routes";

function RecoverPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleReset = () => {
    dispatch(resetPassword.getRegistrationEmail(email));
    navigate(ROUTES.passwordRecoverConfirm, { replace: true, state: {email} })
  }

  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <NavBar>
          <SiteLogo />
        </NavBar>
      </AppBar>
    </Box>
    <RecoverContainer>
      <RecoverBox>
        <TextContainer>
          <TitleText margin='0 0 24px 0'>Recover Password</TitleText>
        </TextContainer>
        <TextContainer>
          <SubTitleText>Enter the email address you used to register and we will send you the instructions</SubTitleText>
        </TextContainer>
        <RecoverInput placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)}/>
        <RecoverButton onClick={handleReset}>RESET PASSWORD</RecoverButton>
        <ButtonContainer>
          <ArrowLeft />
          <BackButton onClick={() => navigate(ROUTES.login, { replace: true })}>BACK TO SIGN IN</BackButton>
        </ButtonContainer>
      </RecoverBox>
    </RecoverContainer>
  </Container>
  )
}

export default RecoverPassword