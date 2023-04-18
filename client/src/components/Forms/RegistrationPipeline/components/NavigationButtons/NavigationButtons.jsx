import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

import ArrowNavigateBack from '../../../../../assets/Arrows/ArrowNavigateBack'
import ArrowNavigateFurther from '../../../../../assets/Arrows/ArrowNavigateFurther'
import { GREEN } from '../../../../../constants/colors'
import CustomButton from '../../../../../shared/components/CustomButton/CustomButton'
import { setStep } from '../../../../../store/reducers/RegistrationAuth'

import { ButtonsContainer } from './NavigationButtons.styles'

const NavigationButtons = ({
  step,
  isOptionalStep,
  isLastStep,
  validationSchema,
  setOneOfOptionalFieldsHasValue,
  oneOfOptionalFieldsHasValue,
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isValid, values } = useFormikContext()

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
      {!isLastStep && (
        <CustomButton
          type="button"
          disabled={!isValid || !(isValid || isOptionalStep)}
          onClick={navigateFurther}
          icon={<ArrowNavigateFurther />}
          iconPosition="right"
          background={GREEN.button}
        >
          {isOptionalStep && !oneOfOptionalFieldsHasValue ? 'Skip' : 'Next Step'}
        </CustomButton>
      )}
      {isLastStep && (
        <CustomButton
          type="submit"
          disabled={!isValid || !(isValid || isOptionalStep)}
          icon={<ArrowNavigateFurther />}
          iconPosition="right"
          background={GREEN.button}
        >
          Finish
        </CustomButton>
      )}
    </ButtonsContainer>
  )
}

export default NavigationButtons
