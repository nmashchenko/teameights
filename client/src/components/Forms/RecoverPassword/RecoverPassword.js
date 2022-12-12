// * Modules
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'

// * Api
import resetPassword from '../../../api/endpoints/reset'
import ArrowLeftReset from '../../../assets/ArrowLeftReset'
// * Assets
import SiteLogo from '../../../assets/SiteLogo'
import Alert from '../../../components/Forms/RegistrationPipeline/Alert/Alert'
import ROUTES from '../../../constants/routes'

import {
  BackButton,
  ButtonContainer,
  Container,
  NavBar,
  RecoverBox,
  RecoverButton,
  RecoverContainer,
  RecoverInput,
  SubTitleText,
  TextContainer,
  TitleText,
} from './RecoverPassword.styles'
import emailValidation from './RecoverValidation'

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
