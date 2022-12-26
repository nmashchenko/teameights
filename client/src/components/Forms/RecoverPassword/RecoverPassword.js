// * Modules
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'
import Alert from '../RegistrationPipeline/components/Alert/Alert'

// * Assets
import SiteLogo from '../../../assets/SiteLogo'
import ArrowLeftReset from '../../../assets/ArrowLeftReset'
import emailValidation from './RecoverValidation'

// * Api
import resetPassword from '../../../api/endpoints/reset'

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
import ROUTES from '../../../constants/routes'

function RecoverPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])

  const handleReset = async () => {
    try {
      await emailValidation.validate({ email })
      resetPassword.getRegistrationEmail(email)
      navigate(ROUTES.passwordRecoverConfirm, {
        replace: true,
        state: { email },
      })
    } catch (err) {
      setErrors(err.errors)
      setOpen(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Container>
      {errors.length > 0 && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Alert onClose={handleClose} severity="error">
            {errors[0]}
          </Alert>
        </Snackbar>
      )}
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
          <TextContainer>
            <SubTitleText>
              Enter the email address you used to register and we will send you the instructions
            </SubTitleText>
          </TextContainer>
          <RecoverInput placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} required />
          <RecoverButton onClick={handleReset}>RESET PASSWORD</RecoverButton>
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
