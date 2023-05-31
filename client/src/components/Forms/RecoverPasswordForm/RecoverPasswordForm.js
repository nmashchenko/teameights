// * Modules
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'

import resetApi from '../../../api/endpoints/reset'
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
  RecoverForm,
  RecoverText,
  RecoverTitle,
} from './RecoverPasswordForm.styles'
import emailValidation from './RecoverValidation'

const RecoverPassword2 = () => {
  const navigate = useNavigate()

  const handleReset = async ({ email }) => {
    try {
      const isSuccess = await resetApi.getRegistrationEmail(email)

      if (!isSuccess) {
        navigate(ROUTES.confirmEmail, {
          replace: true,
          state: { email },
        })
      }
    } catch (err) {
      console.log(err)
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
            onSubmit={(values, _) => handleReset(values)}
          >
            {({ values }) => (
              <RecoverForm>
                <CustomInput containerWidth="100%" placeholder="Email" name="email" type="email" />

                <ButtonsContainer>
                  <CustomButton
                    width="100%"
                    fontSize="16px"
                    disabled={!values.email}
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
              </RecoverForm>
            )}
          </Formik>
        </RecoverBox>
      </Container>
    </>
  )
}

export default RecoverPassword2
