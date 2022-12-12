// * Modules
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'

// * Api
import resetPassword from '../../../api/endpoints/reset'
// * Assets
import SiteLogo from '../../../assets/SiteLogo'
import ROUTES from '../../../constants/routes'

import {
  AlertBox,
  Container,
  InputContainer,
  NavBar,
  NewPasswordBox,
  NewPasswordButton,
  NewPasswordContainer,
  NewPasswordInput,
  PasswordContainer,
  ShowPass,
  SubTitleText,
  TextContainer,
  TitleText,
} from './NewPasswords.styles'

function NewPassword() {
  const navigate = useNavigate()

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />
  })

  let { id, token } = useParams()
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')

  const handleReset = async () => {
    const error = await resetPassword.updatePassword(id, token, password, repeatPassword)

    if (!error) {
      navigate(ROUTES.login, { replace: true })
    } else {
      setOpen(true)
      setError(error)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  useEffect(() => {}, [error])

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <NavBar>
            <SiteLogo />
          </NavBar>
        </AppBar>
      </Box>
      {error && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      <NewPasswordContainer>
        <NewPasswordBox>
          <TextContainer>
            <TitleText margin="0 0 24px 0">Recover Password</TitleText>
          </TextContainer>
          <TextContainer>
            <SubTitleText>
              Create new, <strong> strong </strong> password that you don't use for the other
              websites
            </SubTitleText>
          </TextContainer>
          <InputContainer>
            <PasswordContainer>
              <NewPasswordInput
                placeholder="PASSWORD"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <PasswordContainer>
              <NewPasswordInput
                placeholder="REPEAT PASSWORD"
                type={showPassword ? 'text' : 'password'}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <NewPasswordButton onClick={handleReset}>RESET PASSWORD</NewPasswordButton>
          </InputContainer>
        </NewPasswordBox>
      </NewPasswordContainer>
    </Container>
  )
}

export default NewPassword
