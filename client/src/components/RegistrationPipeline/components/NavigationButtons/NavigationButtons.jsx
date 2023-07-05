import { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

import { setStep } from '../../../../app/providers/store/reducers/RegistrationAuth'
import ArrowNavigateBack from '../../../../assets/Arrows/ArrowNavigateBack'
import ArrowNavigateFurther from '../../../../assets/Arrows/ArrowNavigateFurther'
import { useLogoutUser } from '../../../../shared/api/hooks/auth/useLogoutUser'
import { GREEN } from '../../../../shared/constants/colors'
import { useGetScreenWidth } from '../../../../shared/lib/hooks/useGetScreenWidth'
import { Text } from '../../../../shared/styles/Tpography.styles'
import CustomButton from '../../../../shared/ui/CustomButton/CustomButton'

import { ButtonsContainer, MobileStepper } from './NavigationButtons.styles'

const NavigationButtons = ({
  step,
  isOptionalStep,
  isLastStep,
  steps,
  validationSchema,
  setOneOfOptionalFieldsHasValue,
  oneOfOptionalFieldsHasValue,
  isFinishingRegistration,
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isValid, values, dirty } = useFormikContext()
  const width = useGetScreenWidth()
  const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser()

  useEffect(() => {
    if (isOptionalStep) {
      const currentStepFields = validationSchema[step - 1]._nodes

      const hasValue = currentStepFields.some((field) => {
        const value = values[field]

        return !!value
      })

      setOneOfOptionalFieldsHasValue(hasValue)
    }
  }, [values])
  const navigateBack = () => {
    if (step === 1) {
      navigate('/')
      if (!dirty) {
        logoutUser()
      }
    } else {
      dispatch(setStep(step - 1))
    }
  }

  const navigateFurther = () => {
    if (!isLastStep) {
      dispatch(setStep(step + 1))
    }
  }

  return (
    <ButtonsContainer>
      <CustomButton
        onClick={navigateBack}
        icon={<ArrowNavigateBack />}
        iconPosition="left"
        border="2px solid #46A11B"
        background="transparent"
      >
        {step === 1 ? 'Cancel' : 'Back'}
      </CustomButton>
      <MobileStepper>
        <Text fontSize="16px" fontWeight="400" color="#FFFFFF">
          {step} / {steps.length}
        </Text>
      </MobileStepper>
      {!isLastStep && (
        <CustomButton
          type="button"
          disabled={!isValid || !(isValid || isOptionalStep)}
          onClick={navigateFurther}
          icon={<ArrowNavigateFurther />}
          iconPosition="right"
          background={GREEN.button}
        >
          {isOptionalStep && !oneOfOptionalFieldsHasValue
            ? 'Skip'
            : width > 600
            ? 'Next Step'
            : 'Next'}
        </CustomButton>
      )}
      {isLastStep && (
        <CustomButton
          type="submit"
          disabled={!isValid || !(isValid || isOptionalStep)}
          icon={isFinishingRegistration ? null : <ArrowNavigateFurther />}
          iconPosition="right"
          background={GREEN.button}
        >
          {isFinishingRegistration ? (
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
            'Finish'
          )}
        </CustomButton>
      )}
    </ButtonsContainer>
  )
}

export default NavigationButtons
