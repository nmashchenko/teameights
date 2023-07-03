import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'

import { useCheckAuth } from '../../../../api/hooks/auth/useCheckAuth'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import CurrentStep from '../CurrentStep/CurrentStep'
import NavigationButtons from '../NavigationButtons/NavigationButtons'
import NavLogo from '../NavLogo/NavLogo'
import Stepper from '../Stepper/Stepper'

import { Container, RegistrationContainer, StepContainer } from './MultiStepRegistration.styles'

const MultiStepRegistration = ({
  steps,
  initialValues,
  validationSchema,
  isFinishingRegistration,
  submitForm,
}) => {
  console.log(isFinishingRegistration)
  const [oneOfOptionalFieldsHasValue, setOneOfOptionalFieldsHasValue] = useState(false)

  const { step, isOptionalStep } = useSelector((state) => state.registrationReducer)
  const { data: userData, isFetching } = useCheckAuth()

  const currentStepData = steps[step - 1]
  const isLastStep = step === steps.length
  const handleSubmit = (values) => {
    submitForm(values, userData)
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
              <Stepper steps={steps} step={step} isOptionalStep={isOptionalStep} />
              <RegistrationContainer>
                <NavLogo
                  sectionName={currentStepData.name}
                  isOptionalStep={currentStepData.isOptional}
                  oneOfOptionalFieldsHasValue={oneOfOptionalFieldsHasValue}
                />
                <FlexWrapper height="100%" justify="space-between" direction="column">
                  <StepContainer>
                    <CurrentStep steps={steps} step={step} />
                  </StepContainer>
                  <NavigationButtons
                    step={step}
                    validationSchema={validationSchema}
                    isLastStep={isLastStep}
                    steps={steps}
                    isOptionalStep={currentStepData.isOptional}
                    oneOfOptionalFieldsHasValue={oneOfOptionalFieldsHasValue}
                    setOneOfOptionalFieldsHasValue={setOneOfOptionalFieldsHasValue}
                    isFinishingRegistration={isFinishingRegistration}
                  />
                </FlexWrapper>
              </RegistrationContainer>
            </Container>
          </Form>
        )
      }}
    </Formik>
  )
}

export default MultiStepRegistration
