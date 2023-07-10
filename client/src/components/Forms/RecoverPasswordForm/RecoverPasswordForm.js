// * Modules
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { isEmpty } from 'lodash'

import { useResetPasssword } from '../../../api/hooks/auth/useResetPassword'
// * Assets
import ArrowNavigateBack from '../../../assets/Arrows/ArrowNavigateBack'
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../shared/components/Formik/CustomInput/CustomInput'

import {
  ButtonsContainer,
  Container,
  RecoverBox,
  RecoverForm,
  RecoverText,
  RecoverTitle,
} from './RecoverPasswordForm.styles'
import emailValidation from './RecoverValidation'

const RecoverPassword2 = () => {
  const navigate = useNavigate()

  const { mutate: resetPassword, isLoading: isResetting } = useResetPasssword()

  return (
    <Container>
      <RecoverBox>
        <FlexWrapper direction="column" gap="8px">
          <RecoverTitle>Recover Password</RecoverTitle>
          <RecoverText>
            Enter the email you used to register and we will send you link to reset your password
          </RecoverText>
        </FlexWrapper>

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={emailValidation}
          onSubmit={({ email }, _) => resetPassword(email)}
        >
          {({ values, errors }) => (
            <RecoverForm>
              <CustomInput containerWidth="100%" placeholder="Email" name="email" type="email" />

              <ButtonsContainer>
                <CustomButton
                  width="100%"
                  fontSize="16px"
                  disabled={!isEmpty(errors)}
                  type="onSubmit"
                  name="email"
                >
                  {isResetting ? (
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
                    'Reset password'
                  )}
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
  )
}

export default RecoverPassword2
