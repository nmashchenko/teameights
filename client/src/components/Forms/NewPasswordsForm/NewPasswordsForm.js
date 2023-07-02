// * Modules
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined'
import Visibility from '@mui/icons-material/VisibilityOutlined'
import { Form, Formik } from 'formik'

// * Api
import resetPassword from '../../../api/endpoints/reset'
// * Assets
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import CustomInput from '../../../shared/components/CustomInput/CustomInput'
import { RecoverText, RecoverTitle } from '../RecoverPasswordForm/RecoverPasswordForm.styles'

import {
  Container,
  NewPasswordBox,
  PasswordContainer,
  PasswordsContainer,
  ShowPass,
} from './NewPasswordsForm.styles'
import newPasswordValidation from './NewPasswordsValidation'

function NewPassword() {
  const navigate = useNavigate()

  let { id, token } = useParams()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({})

  const handleReset = async () => {
    // const error = await resetPassword.updatePassword(id, token, password, repeatPassword)

    if (!error) {
      navigate(ROUTES.login, { replace: true })
    } else {
      setError(error)
    }
  }

  return (
    <Container>
      <NewPasswordBox>
        <RecoverTitle>Recover Password</RecoverTitle>
        <RecoverText>
          Enter a new password and confirm it by re-entering it in the appropriate fields
        </RecoverText>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={newPasswordValidation}
          onSubmit={() => handleReset()}
        >
          {({ values }) => (
            <Form>
              <PasswordsContainer>
                <PasswordContainer>
                  <CustomInput
                    label="Create Password"
                    inputValue={values.password}
                    width="100%"
                    placeholder="Create Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    setError={setError}
                  />
                  {!error?.isError && (
                    <ShowPass onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <Visibility sx={{ color: 'white' }} />
                      ) : (
                        <VisibilityOff sx={{ color: 'white' }} />
                      )}
                    </ShowPass>
                  )}
                </PasswordContainer>
                <PasswordContainer>
                  <CustomInput
                    label="Confirm Password"
                    inputValue={values.confirmPassword}
                    width="100%"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    confirmPasswordValue={values.confirmPassword}
                    uniqueError={values.password === values.confirmPassword ? false : true}
                    uniqueErrorMessage={
                      values.password !== values.confirmPassword ? "Passwords don't match" : null
                    }
                  />
                  <ShowPass onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <Visibility sx={{ color: 'white' }} />
                    ) : (
                      <VisibilityOff sx={{ color: 'white' }} />
                    )}
                  </ShowPass>
                </PasswordContainer>
              </PasswordsContainer>
              <CustomButton width="100%" fontSize="16px" type="onSubmit">
                Save
              </CustomButton>
            </Form>
          )}
        </Formik>
      </NewPasswordBox>
    </Container>
  )
}

export default NewPassword
