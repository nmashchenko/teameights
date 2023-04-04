import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

import { finishRegistrationValidation } from '../../../../../schemas'
import { setIsLastStep } from '../../../../../store/reducers/RegistrationAuth'

const CurrentStep = ({ step, steps }) => {
  const dispatch = useDispatch()
  const { setTouched } = useFormikContext()

  useEffect(() => {
    dispatch(setIsLastStep(step === finishRegistrationValidation.length))
    setTouched({})
  }, [step])
  const currentStep = steps[step -1]

  return currentStep ? currentStep.component : <Navigate to="/not-found" />
}

export default CurrentStep
