import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Formik } from 'formik'

import { useCheckAuth } from '../../../../../api/hooks/auth/useCheckAuth'
import Loader from '../../../../../shared/components/Loader/Loader'
import { setStep } from '../../../../../store/reducers/RegistrationAuth'
import CurrentStep from '../CurrentStep/CurrentStep'
import NavLogo from '../NavLogo/NavLogo'
import Stepper from '../Stepper/Stepper'

import { Container, ContentContainer, RegistrationContainer } from './MultiStepRegistration.styles'
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const MultiStepRegistration = ({
  steps,
  initialValues,
  validationSchema,
  isFinishingRegistration,
  submitForm,
}) => {
  const { step, isOptionalStep } = useSelector((state) => state.registrationReducer)
  const dispatch = useDispatch()
  const { data: userData } = useCheckAuth()
  const currentStep = steps[step - 1]
  const isLastStep = step === steps.length

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, userData)
    } else {
      dispatch(setStep(step + 1))
      actions.setTouched({})
    }
  }

  if (isFinishingRegistration) {
    return <Loader />
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[step - 1]}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <Form>
            <Container>
              <Stepper
                steps={steps}
                step={step}
                isOptionalStep={isOptionalStep}
              />
              <RegistrationContainer>
                <NavLogo sectionName={currentStep.name} />
                <ContentContainer>
                  <CurrentStep steps={steps} step={step} />
                </ContentContainer>
                <NavigationButtons step={step} isLastStep={isLastStep} steps={steps} isOptionalStep={currentStep.isOptional}/>
              </RegistrationContainer>
            </Container>
          </Form>
        );
      }}
    </Formik>
  )
}

export default MultiStepRegistration
