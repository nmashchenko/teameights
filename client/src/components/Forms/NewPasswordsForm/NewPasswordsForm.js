// * Modules
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined'
import Visibility from '@mui/icons-material/VisibilityOutlined'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import { Form, Formik } from 'formik'

// * Api
import resetPassword from '../../../api/endpoints/reset'
// * Assets
import SiteLogo from '../../../assets/Platform/TeameightsLogo'
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import CustomInput from '../../../shared/components/CustomInput/CustomInput'
import { RecoverText, RecoverTitle } from '../RecoverPasswordForm/RecoverPasswordForm.styles'

import {
  Container,
  InputsContainer,
  NewPasswordBox,
  PasswordContainer,
  ShowPass,
} from './NewPasswordsForm.styles'

function NewPassword() {
  const navigate = useNavigate()

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />
  // })

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
      <NewPasswordBox>
        <RecoverTitle>Recover Password</RecoverTitle>
        <RecoverText>
          Enter a new password and confirm it by re-entering it in the appropriate fields
        </RecoverText>
        <Formik
          initialValues={{
            NewPassword: null,
            ConfirmPassword: null,
          }}
        >
          <Form>
            <InputsContainer>
              <PasswordContainer>
                <CustomInput
                  containerWidth="100%"
                  placeholder="Create Password"
                  name="NewPassword"
                  type={showPassword ? 'text' : 'password'}
                />
                <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Visibility sx={{ color: 'white' }} />
                  ) : (
                    <VisibilityOff sx={{ color: 'white' }} />
                  )}
                </ShowPass>
              </PasswordContainer>
              <PasswordContainer>
                <CustomInput
                  containerWidth="100%"
                  placeholder="Confirm Password"
                  name="ConfirmPassword"
                  type={showPassword ? 'text' : 'password'}
                />
                <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Visibility sx={{ color: 'white' }} />
                  ) : (
                    <VisibilityOff sx={{ color: 'white' }} />
                  )}
                </ShowPass>
              </PasswordContainer>
            </InputsContainer>
          </Form>
        </Formik>

        <CustomButton
          width="100%"
          fontSize="16px"
          onClick={() => navigate(ROUTES.login, { replace: true })}
        >
          Log in
        </CustomButton>
      </NewPasswordBox>
    </Container>
  )
}

export default NewPassword
