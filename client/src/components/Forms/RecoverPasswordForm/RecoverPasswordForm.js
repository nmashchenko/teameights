// * Modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'

// * Assets
import ArrowNavigateBack from '../../../assets/Arrows/ArrowNavigateBack'
import SiteLogo from '../../../assets/BigSideLogo'
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import CustomInput from '../../../shared/components/CustomInput/CustomInput'

import {
  AccountActions,
  ButtonsContainer,
  Container,
  Navbar,
  NavigationLink,
  RecoverBox,
  RecoverText,
  RecoverTitle,
} from './RecoverPasswordForm.styles'
import emailValidation from './RecoverValidation'

const RecoverPassword2 = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState([])

  const handleReset = async () => {
    try {
      const isValid = await emailValidation.validate({ email })

      console.log(isValid)
    } catch (err) {
      setErrors(err.errors)
    }
  }

  return (
    <>
      <Container>
        <Navbar>
          <SiteLogo />
          <AccountActions>
            <NavigationLink to={ROUTES.passwordRecover}>Log in</NavigationLink>
            <NavigationLink to={ROUTES.registration}>Sign up</NavigationLink>
          </AccountActions>
        </Navbar>

        <RecoverBox>
          <RecoverTitle>Recover Password</RecoverTitle>
          <RecoverText>
            Enter the email you used to register and we will send you link to reset your password
          </RecoverText>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={emailValidation}
          >
            {({ values }) => (
              <>
                <CustomInput containerWidth="100%" placeholder="Email" name="email" type="email" />

                <ButtonsContainer>
                  <CustomButton
                    width="100%"
                    fontSize="16px"
                    disabled={!values.email}
                    onClick={handleReset}
                    type="onSubmit"
                    name="email"
                  >
                    Reset password
                  </CustomButton>
                  <CustomButton
                    width="100%"
                    icon={<ArrowNavigateBack />}
                    iconPosition="left"
                    border="2px solid #46A11B"
                    background="transparent"
                    fontSize="16px"
                    onClick={() => navigate(ROUTES.login, { replace: true })}
                  >
                    Back to Log in
                  </CustomButton>
                </ButtonsContainer>
              </>
            )}
          </Formik>
        </RecoverBox>
      </Container>
    </>
  )
}

export default RecoverPassword2
