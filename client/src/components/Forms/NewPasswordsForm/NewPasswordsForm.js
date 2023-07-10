// * Modules
import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined'
import Visibility from '@mui/icons-material/VisibilityOutlined'
import { Formik } from 'formik'
import { isEmpty } from 'lodash'

import { useUpdatePassword } from '../../../api/hooks/auth/useUpdatePassword'
// * Assets
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../shared/components/Formik/CustomInput/CustomInput'
import {
  FormWrapper,
  RecoverText,
  RecoverTitle,
} from '../RecoverPasswordForm/RecoverPasswordForm.styles'

import {
  Container,
  NewPasswordBox,
  PasswordContainer,
  PasswordsContainer,
  ShowPass,
} from './NewPasswordsForm.styles'
import newPasswordValidation from './NewPasswordsValidation'

function NewPassword() {
  let { id: email, token } = useParams()
  const { mutate: updateUserPassword, isLoading: isUpdating } = useUpdatePassword()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <NewPasswordBox>
        <FlexWrapper gap="8px" direction="column">
          <RecoverTitle>Recover Password</RecoverTitle>
          <RecoverText>
            Enter a new password and confirm it by re-entering it in the appropriate fields
          </RecoverText>
        </FlexWrapper>
        <Formik
          initialValues={{
            email: email,
            token: token,
            password: '',
            confirmPassword: '',
          }}
          validationSchema={newPasswordValidation}
          onSubmit={({ email, token, password }) => updateUserPassword({ email, token, password })}
        >
          {({ values, errors }) => (
            <FormWrapper>
              <PasswordsContainer>
                <PasswordContainer>
                  <CustomInput
                    label="Create Password"
                    width="100%"
                    placeholder="Create Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    withIcon={false}
                  />
                  <ShowPass onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <Visibility sx={{ color: 'white' }} />
                    ) : (
                      <VisibilityOff sx={{ color: 'white' }} />
                    )}
                  </ShowPass>
                </PasswordContainer>
                <PasswordContainer>
                  <CustomInput
                    label="Confirm Password"
                    inputValue={values.confirmPassword}
                    width="100%"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    withIcon={false}
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
              <CustomButton
                width="100%"
                fontSize="16px"
                type="onSubmit"
                disabled={!isEmpty(errors)}
              >
                {isUpdating ? (
                  <ThreeDots
                    height="24"
                    width="24"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  '                Save'
                )}
              </CustomButton>
            </FormWrapper>
          )}
        </Formik>
      </NewPasswordBox>
    </Container>
  )
}

export default NewPassword
