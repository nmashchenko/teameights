// * Modules
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { useNavigate, useLocation } from 'react-router-dom'
import ArrowLeftReset from '../../../assets/ArrowLeftReset'

// * Assets
import SiteLogo from '../../../assets/SiteLogo'
import ROUTES from '../../../constants/routes'

import {
  NavBar,
  Container,
  RecoverContainer,
  RecoverBox,
  TextContainer,
  TitleText,
  MiddleContainer,
  MiddleText,
  BackButton,
  ButtonContainer,
} from './RecoverConfirmation.styles'

function RecoverPassword() {
  const navigate = useNavigate()
  const location = useLocation()

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
            <TitleText margin="0 0 24px 0">Recover Password</TitleText>
          </TextContainer>
          <MiddleContainer>
            <MiddleText>
              If account “{location.state.email}” exists, an email will be sent with futher
              instructions
            </MiddleText>
          </MiddleContainer>
          <ButtonContainer>
            <ArrowLeftReset />
            <BackButton onClick={() => navigate(ROUTES.login, { replace: true })}>
              BACK TO SIGN IN
            </BackButton>
          </ButtonContainer>
        </RecoverBox>
      </RecoverContainer>
    </Container>
  )
}

export default RecoverPassword
